import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch } from '@services/hooks/redux';
import { setIsFirstLaunchApp } from '@services/store/app';
import { getUserInfo } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

export const useAgreeTermsOfServices = () => {
  const { navigate } = useNavigation();
  const [isCheckBoxActive, setIsCheckBoxActive] = useState(false);
  const dispatch = useAppDispatch();
  const isDefaultValueExists = !!useSelector(getUserInfo).dailyGoal;
  const [isFirstLaunch, setIsFirstLaunch] = useState(!isDefaultValueExists);
  const [isAllowRenderPage, setIsAllowRenderPage] = useState(!isDefaultValueExists);

  useEffect(() => {
    setTimeout(() => {
      if (isDefaultValueExists && !isFirstLaunch) {
        dispatch(setIsFirstLaunchApp(false));
        return navigate(APP_ROUTES.drawer as never);
      }
      setIsAllowRenderPage(true);
    }, 0);
  }, [isDefaultValueExists, navigate, isFirstLaunch]);

  const navigateToTermsOfServices = () => {
    navigate(APP_ROUTES.TermsOfServices as never);
  };

  const toggleCheckBox = () => {
    setIsCheckBoxActive(!isCheckBoxActive);
  };

  const navigateToOnboarding = () => {
    setIsFirstLaunch(true);
    navigate(APP_ROUTES.start.onBoard as never);
  };

  return {
    isAllowRenderPage,
    isCheckBoxActive,
    toggleCheckBox,
    navigateToTermsOfServices,
    navigateToOnboarding,
  };
};
