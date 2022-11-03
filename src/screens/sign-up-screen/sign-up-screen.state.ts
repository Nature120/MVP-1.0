import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { authApple } from '@services/helpers/apple-auth';
import { authFaceBook } from '@services/helpers/facebook-auth';
import { authGoogle } from '@services/helpers/google-auth';
import { getLoading } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

import { TNavigation } from '@typings/common';

export const useSignUpState = () => {
  const isLoading = useSelector(getLoading);
  const { navigate } = useNavigation<TNavigation>();

  const onGoogleButtonPress = async () => {
    await authGoogle();
  };

  const onFacebookButtonPress = async () => {
    await authFaceBook();
  };

  const onAppleButtonPress = async () => {
    await authApple();
  };

  const onPressLogIn = () => {
    navigate(APP_ROUTES.start.signIn, {});
  };

  return { onPressLogIn, onGoogleButtonPress, onFacebookButtonPress, onAppleButtonPress, isLoading };
};
