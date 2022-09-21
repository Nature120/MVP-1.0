import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { useGoal } from '@services/hooks/goal';
import { useAppDispatch } from '@services/hooks/redux';
import { setCommentBeforeImmersion } from '@services/store/app';
import { getUserInfo } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

export const useHome = () => {
  const { navigate } = useNavigation();
  const user = useSelector(getUserInfo);
  const { weeklyGoal } = useGoal();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const onToggleOpen = () => setIsOpen(prev => !prev);
  const closeModal = () => setIsOpen(false);

  const saveResponse = async (value: string) => {
    const response = value.trim();
    dispatch(setCommentBeforeImmersion(response));
    navigateToImmersions();
  };

  const navigateToImmersions = () => {
    closeModal();
    setTimeout(() => {
      navigate(APP_ROUTES.immersions as never);
    }, 500);
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
