import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { userInstance } from '@services/api.service';
import { useGoal } from '@services/hooks/goal';
import { useAppDispatch } from '@services/hooks/redux';
import { setCommentBeforeImmersion } from '@services/store/app';
import { isFirstLaunch, partialUpdateUser } from '@services/store/auth/auth.actions';
import { getFirstLaunch, getUserInfo } from '@services/store/auth/auth.selectors';
import { IUser } from '@services/store/auth/auth.typings';

import { APP_ROUTES } from '@constants/routes';

export const useHome = () => {
  const { navigate } = useNavigation();
  const user = useSelector(getUserInfo);
  const { weeklyGoal } = useGoal();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const firstLaunch = useSelector(getFirstLaunch);

  const onToggleOpen = () => setIsOpen(prev => !prev);
  const closeModal = () => setIsOpen(false);

  const saveResponse = (value: string) => {
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
    const getUser = async () => {
      const userInfo = await userInstance(user.uid).get();
      const userData = userInfo.data() as IUser;

      dispatch(partialUpdateUser(userData));
    };

    getUser();
  }, []);

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
