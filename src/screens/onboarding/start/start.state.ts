import { useEffect, useState } from 'react';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch } from '@services/hooks/redux';
import { setIsFirstLaunchApp } from '@services/store/app';
import { getUserInfo } from '@services/store/auth/auth.selectors';

import { IMAGES_TO_PRELOAD } from '@constants/images';
import { APP_ROUTES } from '@constants/routes';

export const useStart = () => {
  const isDefaultValueExists = !!useSelector(getUserInfo).dailyGoal;
  const { navigate } = useNavigation();
  const [isFirstLaunch, setIsFirstLaunch] = useState(!isDefaultValueExists);
  const [isAllowRenderPage, setIsAllowRenderPage] = useState(!isDefaultValueExists);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (isDefaultValueExists && !isFirstLaunch) {
        dispatch(setIsFirstLaunchApp(false));
        return navigate(APP_ROUTES.drawer as never);
      }
      setIsAllowRenderPage(true);
    }, 0);
  }, [isDefaultValueExists, navigate]);

  useEffect(() => {
    FastImage.preload(IMAGES_TO_PRELOAD);
  }, []);

  const onPressContinue = () => {
    setIsFirstLaunch(true);
  };

  return {
    onPressContinue,
    isAllowRenderPage,
  };
};
