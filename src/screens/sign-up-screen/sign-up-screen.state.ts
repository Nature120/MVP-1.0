import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { authFaceBook } from '@services/helpers/facebook-auth';
import { authGoogle } from '@services/helpers/google-auth';
import { isFirstLaunch } from '@services/store/auth/auth.actions';
import { getLoading } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

import { TNavigation } from '@typings/common';

export const useSignUpState = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const { navigate } = useNavigation<TNavigation>();

  const onGoogleButtonPress = async () => {
    await authGoogle();
    await isFirstLaunchCheck();
  };

  const onFacebookButtonPress = async () => {
    await authFaceBook();
    setTimeout(async () => {
      await isFirstLaunchCheck();
    }, 1800);
  };

  const onAppleButtonPress = async () => {
    await authFaceBook();
    setTimeout(async () => {
      await isFirstLaunchCheck();
    }, 1800);
  };

  const onPressLogIn = () => {
    navigate(APP_ROUTES.start.signIn, {});
  };

  const isFirstLaunchCheck = async () => {
    const value = await AsyncStorage.getItem('isFirstLaunchNature120');
    const isFirstTime = value === 'true';
    if (isFirstTime) {
      return dispatch(isFirstLaunch(true));
    }
    dispatch(isFirstLaunch(false));
  };
  return { onPressLogIn, onGoogleButtonPress, onFacebookButtonPress, onAppleButtonPress, isLoading };
};
