import { useEffect, useState } from 'react';
import Config from 'react-native-config';
import Purchases from 'react-native-purchases';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { getWeek } from 'date-fns';

import { getUser, updateUser } from '@services/api.service';
import { isIOS } from '@services/helpers/device-utils';
import { useGoal } from '@services/hooks/goal';
import { useAppDispatch, useAppSelector } from '@services/hooks/redux';
import { notificationsAPI } from '@services/notifications/notifications.api';
import { NOTIFICATIONS_COUNT } from '@services/notifications/notifications.utils';
import { setCommentBeforeImmersion, setGradeBeforeImmersion, setIsFirstLaunchApp } from '@services/store/app';
import { filterExpiredPractices } from '@services/store/auth/auth.actions';
import { getFisishedPractices, getUserInfo } from '@services/store/auth/auth.selectors';
import { IFinishedPractices } from '@services/store/auth/auth.typings';
import * as selector from '@services/store/timer/timer.selectors';

import { CONFIG } from '@constants/config';
import { APP_ROUTES } from '@constants/routes';

export const useHome = () => {
  const { navigate, openDrawer } = useNavigation() as any;
  const user = useSelector(getUserInfo);
  const { weeklyGoal } = useGoal();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { isFirstLaunchApp, notificationsList } = useAppSelector(store => store.app);
  const finishedPractices = useSelector(getFisishedPractices);
  const currentWeek = getWeek(new Date());

  const startDate = useSelector(selector.getStartDate);
  const secondsTimer = useSelector(selector.getSeconds);

  const onToggleOpen = () => setIsOpen(prev => !prev);
  const closeModal = () => setIsOpen(false);

  const navigateToImmersions = () => {
    closeModal();
    navigate(APP_ROUTES.immersions as never);
  };

  const saveResponse = (value: string) => {
    const response = value.trim();
    dispatch(setCommentBeforeImmersion(response));
    navigateToImmersions();
  };

  const onConfirmPress = (grade: number) => {
    dispatch(setGradeBeforeImmersion(grade));
  };

  useEffect(() => {
    const clearUserProgress = async () => {
      const userInfo = await getUser(user.uid);
      const lastEnterAt = userInfo?.lastEnterAt as unknown as { seconds: number };
      if (!lastEnterAt) {
        return;
      }

      const normalizeDate = new Date(lastEnterAt.seconds * 1000);
      const lastEnterAtWeek = getWeek(normalizeDate);

      if (lastEnterAtWeek !== currentWeek) {
        await updateUser(user.uid, { goal: 0 }, dispatch);
      }
      await updateUser(user.uid, { lastEnterAt: new Date() });
    };

    clearUserProgress();
  }, []);

  useEffect(() => {
    if (!isFirstLaunchApp) {
      return;
    }
    dispatch(setIsFirstLaunchApp(false));
  }, []);

  ///Billing sub
  useEffect(() => {
    Purchases.setDebugLogsEnabled(true);
    isIOS
      ? Purchases.configure({ apiKey: CONFIG.revenueCatApiKeyApple as string })
      : Purchases.configure({ apiKey: CONFIG.revenueCatApiKeyGoogle as string });
  }, []);

  // sync notifications
  useEffect(() => {
    const syncNotifications = async () => {
      const maximumDate = new Date();
      maximumDate.setDate(maximumDate.getDate() + (NOTIFICATIONS_COUNT - 10));

      const today = new Date().getTime();
      if (today >= maximumDate.getTime()) {
        // notifications expired
        return await notificationsAPI.syncNotifications(
          user.uid,
          notificationsList,
          user.timeForImmersion!,
          dispatch,
          true,
        );
      }
      //notifications list was changed
      await notificationsAPI.syncNotifications(user.uid, notificationsList, user.timeForImmersion!, dispatch);
    };

    if (!user.timeForImmersion) {
      return;
    }
    syncNotifications();
  }, []);

  ////If we have startDate or Seconds redirect to timer///

  useEffect(() => {
    if (startDate || secondsTimer) {
      navigate(APP_ROUTES.immersionTimer as never);
    }
  }, []);

  /////Filtering practices if its a new week"

  useEffect(() => {
    const filteredPractices = removeLastWeekPractices();
    if (!filteredPractices) {
      return;
    }
    saveFilteredPractices(filteredPractices);
  }, []);

  const removeLastWeekPractices = () => {
    const isFinishedPracticesEmpty = finishedPractices?.length === 0;

    if (!finishedPractices || isFinishedPracticesEmpty) {
      return;
    }

    return finishedPractices.reduce((prevPractices, practice): any => {
      const validNumberDate = practice.created_at.seconds * 1000;
      const normalizeDate = new Date(validNumberDate);
      const fireBaseDate = firestore.Timestamp.fromDate(normalizeDate);
      const getPracticeWeek = getWeek(normalizeDate);
      const isValidPractice = currentWeek === getPracticeWeek;
      if (isValidPractice) {
        return [...prevPractices, { title: practice.title, created_at: fireBaseDate }];
      }
      return [...prevPractices];
    }, []);
  };

  const saveFilteredPractices = async (filteredPractices: IFinishedPractices[]) => {
    await firestore().collection('Users').doc(user.uid).update({
      finishedPractices: filteredPractices,
    });

    dispatch(filterExpiredPractices(filteredPractices));
  };

  const onPressDrawer = () => openDrawer();

  return {
    user,
    weeklyGoal,
    isOpen,
    onPressDrawer,
    closeModal,
    onToggleOpen,
    saveResponse,
    navigateToImmersions,
    onConfirmPress,
  };
};
