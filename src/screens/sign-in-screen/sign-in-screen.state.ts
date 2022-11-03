import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { authApple } from '@services/helpers/apple-auth';
import { authFaceBook } from '@services/helpers/facebook-auth';
import { authGoogle } from '@services/helpers/google-auth';
import { getLoading } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

import { TNavigation } from '@typings/common';

export const useSignInState = () => {
  const { navigate } = useNavigation<TNavigation>();
  const isLoading = useSelector(getLoading);

  const onGoogleButtonPress = async () => {
    await authGoogle();
  };

  const onAppleButtonPress = async () => {
    await authApple();
  };

  const onFacebookButtonPress = async () => {
    await authFaceBook();
  };

  const onPressSignUp = () => {
    navigate(APP_ROUTES.start.signUp, {});
  };

  return { onPressSignUp, onGoogleButtonPress, onFacebookButtonPress, onAppleButtonPress, isLoading };
};
