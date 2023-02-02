import { useEffect, useState } from 'react';
import Purchases from 'react-native-purchases';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { getWeek } from 'date-fns';

import { setWeeklyUserGoal } from './../../services/store/auth/auth.actions';

import { removeLastWeekPractices, sumUserWeeklyGoal } from './home.utils';
import { getUser, updateUser } from '@services/api.service';
import { isIOS } from '@services/helpers/device-utils';
import { areSameObjectArrays } from '@services/helpers/utils';
import { useGoal } from '@services/hooks/goal';
import { useAppDispatch, useAppSelector } from '@services/hooks/redux';
import { useStoreSubscription } from '@services/hooks/subscription-store';
import { notificationsAPI } from '@services/notifications/notifications.api';
import { NOTIFICATIONS_COUNT } from '@services/notifications/notifications.utils';
import { setCommentBeforeImmersion, setGradeBeforeImmersion, setIsFirstLaunchApp } from '@services/store/app';
import { filterExpiredPractices } from '@services/store/auth/auth.actions';
import { getFisishedPractices, getSubscription, getUserInfo } from '@services/store/auth/auth.selectors';
import { IFinishedPractices } from '@services/store/auth/auth.typings';
import * as selector from '@services/store/timer/timer.selectors';

import { CURRENT_WEEK } from './home.constants';
import { CONFIG } from '@constants/config';
import { APP_ROUTES } from '@constants/routes';

export const useHome = () => {
  const { navigate, openDrawer } = useNavigation() as any;
  const user = useSelector(getUserInfo);
  const { weeklyGoal } = useGoal();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { isFirstLaunchApp, notificationsList } = useAppSelector(store => store.app);
  const { storeSubscription } = useStoreSubscription();
  const finishedPractices = useSelector(getFisishedPractices);

  const startDate = useSelector(selector.getStartDate);
  const secondsTimer = useSelector(selector.getSeconds);

  const subscription = useSelector(getSubscription);

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

      if (lastEnterAtWeek !== CURRENT_WEEK) {
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

  ////Check on premium acc
  useEffect(() => {
    Purchases.addCustomerInfoUpdateListener(info => {
      // handle any changes to customerInfo
      checkUserPremiumInfo();
    });
  }, []);

  ///Connected to billing sub
  useEffect(() => {
    Purchases.setDebugLogsEnabled(true);
    isIOS
      ? Purchases.configure({ apiKey: CONFIG.revenueCatApiKeyApple as string, appUserID: user.uid })
      : Purchases.configure({ apiKey: CONFIG.revenueCatApiKeyGoogle as string, appUserID: user.uid });
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

  /////Filtering practices if it's a new week"

  useEffect(() => {
    const filteredPractices = removeLastWeekPractices(finishedPractices);
    if (!filteredPractices) {
      return;
    }

    saveFilteredPractices(filteredPractices);
  }, []);

  const saveFilteredPractices = async (filteredPractices: IFinishedPractices[]) => {
    const areSameObject = areSameObjectArrays(filteredPractices, finishedPractices);

    if (!filteredPractices || areSameObject) {
      return;
    }
    const elapsedTime = sumUserWeeklyGoal(filteredPractices);

    ///Save calculated new elapsed time

    await firestore().collection('Users').doc(user.uid).update({
      finishedPractices: filteredPractices,
      goal: elapsedTime,
    });

    dispatch(setWeeklyUserGoal(elapsedTime));
    dispatch(filterExpiredPractices(filteredPractices));
  };

  const checkUserPremiumInfo = async () => {
    try {
      const customerInfo = await Purchases.getCustomerInfo();
      const { premium } = customerInfo.entitlements.active;
      const isSubscription = subscription === 'ANNUAL' || subscription === 'MONTHLY';

      if (typeof premium !== 'undefined') {
        if (isSubscription) {
          return;
        }

        storeSubscription(premium.productIdentifier);
        return;
      }

      if (subscription === 'FREE') {
        return;
      }

      storeSubscription('FREE');
    } catch (e) {
      // Error fetching customer info
      console.log('erorr', e);
    }
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
