import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { getWeek } from 'date-fns';

import { useGoal } from '@services/hooks/goal';
import { useAppDispatch } from '@services/hooks/redux';
import { setCommentBeforeImmersion } from '@services/store/app';
import { filterExpiredPractices, isFirstLaunch } from '@services/store/auth/auth.actions';
import { getFirstLaunch, getFisishedPractices, getUserInfo } from '@services/store/auth/auth.selectors';
import { IFinishedPractices } from '@services/store/auth/auth.typings';

import { APP_ROUTES } from '@constants/routes';

export const useHome = () => {
  const { navigate } = useNavigation();
  const user = useSelector(getUserInfo);
  const { weeklyGoal } = useGoal();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const firstLaunch = useSelector(getFirstLaunch);
  const finishedPractices = useSelector(getFisishedPractices);
  const getCurrentWeek = getWeek(new Date());

  const onToggleOpen = () => setIsOpen(prev => !prev);
  const closeModal = () => setIsOpen(false);

  const saveResponse = async (value: string) => {
    const response = value.trim();
    dispatch(setCommentBeforeImmersion(response));
    navigateToImmersions();
  };

  useEffect(() => {
    if (firstLaunch === false) {
      return;
    }
    dispatch(isFirstLaunch(false));
  }, []);

  useEffect(() => {
    const filteredPractices = removeLastWeekPractices();
    if (!filteredPractices) {
      return;
    }
    saveFilteredPractices(filteredPractices);
  }, []);

  const navigateToImmersions = () => {
    closeModal();
    setTimeout(() => {
      navigate(APP_ROUTES.immersions as never);
    }, 500);
  };

  const removeLastWeekPractices = () => {
    const isfinishedPracticesEmpty = finishedPractices?.length === 0;

    if (!finishedPractices || isfinishedPracticesEmpty) {
      return;
    }

    return finishedPractices.filter(practice => {
      const normalizeDate = practice.created_at.toDate();
      const getPracticeWeek = getWeek(normalizeDate);
      return getCurrentWeek === getPracticeWeek;
    });
  };

  const saveFilteredPractices = (filteredPractices: IFinishedPractices[]) => {
    dispatch(filterExpiredPractices(filteredPractices));
    firestore().collection('Users').doc(user.uid).update({
      finishedPractices: filteredPractices,
    });
  };

  return {
    user,
    weeklyGoal,
    isOpen,
    closeModal,
    onToggleOpen,
    saveResponse,
    navigateToImmersions,
  };
};
