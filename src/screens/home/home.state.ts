import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { getWeek } from 'date-fns';

import { useGoal } from '@services/hooks/goal';
import { useAppDispatch } from '@services/hooks/redux';
import { notificationsAPI } from '@services/notifications.api';
import { setCommentBeforeImmersion, setNotificationsList } from '@services/store/app';
import { filterExpiredPractices, isFirstLaunch } from '@services/store/auth/auth.actions';
import { getFirstLaunch, getFisishedPractices, getUserInfo } from '@services/store/auth/auth.selectors';
import { IFinishedPractices } from '@services/store/auth/auth.typings';
import * as selector from '@services/store/timer/timer.selectors';

import { APP_ROUTES } from '@constants/routes';

export const useHome = () => {
  const { navigate, openDrawer } = useNavigation() as any;
  const user = useSelector(getUserInfo);
  const { weeklyGoal } = useGoal();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const firstLaunch = useSelector(getFirstLaunch);
  const finishedPractices = useSelector(getFisishedPractices);
  const getCurrentWeek = getWeek(new Date());

  const startDate = useSelector(selector.getStartDate);
  const secondsTimer = useSelector(selector.getSeconds);

  const onToggleOpen = () => setIsOpen(prev => !prev);
  const closeModal = () => setIsOpen(false);

  const saveResponse = (value: string) => {
    const response = value.trim();
    dispatch(setCommentBeforeImmersion(response));
    navigateToImmersions();
  };

  useEffect(() => {
    if (!firstLaunch) {
      return;
    }
    dispatch(isFirstLaunch(false));
  }, []);

  // sync notifications
  useEffect(() => {
    const getNotifications = async () => {
      const notificationsList = await notificationsAPI.getAll();
      dispatch(setNotificationsList(notificationsList));
    };

    getNotifications();
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

  const navigateToImmersions = () => {
    closeModal();
    navigate(APP_ROUTES.immersions as never);
  };

  const removeLastWeekPractices = () => {
    const isfinishedPracticesEmpty = finishedPractices?.length === 0;

    if (!finishedPractices || isfinishedPracticesEmpty) {
      return;
    }

    return finishedPractices.reduce((prevPractices, practice): any => {
      const validNumberDate = practice.created_at.seconds * 1000;
      const normalizeDate = new Date(validNumberDate);
      const fireBaseDate = firestore.Timestamp.fromDate(normalizeDate);
      const getPracticeWeek = getWeek(normalizeDate);
      const isValidPractice = getCurrentWeek === getPracticeWeek;
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
  };
};
