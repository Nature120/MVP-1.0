import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { authApple } from '@services/helpers/apple-auth';
import { authFaceBook } from '@services/helpers/facebook-auth';
import { authGoogle } from '@services/helpers/google-auth';
import { getLoading } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

import { TNavigation } from '@typings/common';

export const useSignUpState = () => {
  const [isCheckedTerms, setIsCheckedTerms] = useState<boolean>(false);
  const [isCheckedPrivacy, setIsCheckedPrivacy] = useState<boolean>(false);
  const [isWarningCheckBoxBorder, setIsWarningCheckBoxBorder] = useState<boolean>(false);

  const isBoxesChecked = isCheckedTerms === true && isCheckedPrivacy === true;

  const isLoading = useSelector(getLoading);
  const { navigate } = useNavigation<TNavigation>();

  const onGoogleButtonPress = () => {
    isBoxesChecked ? authGoogle() : setIsWarningCheckBoxBorder(true);
  };

  const onFacebookButtonPress = () => {
    isBoxesChecked ? authFaceBook() : setIsWarningCheckBoxBorder(true);
  };

  const onAppleButtonPress = () => {
    isBoxesChecked ? authApple() : setIsWarningCheckBoxBorder(true);
  };

  const onPressLogIn = () => {
    navigate(APP_ROUTES.start.signIn, {});
  };

  return {
    onPressLogIn,
    onGoogleButtonPress,
    onFacebookButtonPress,
    onAppleButtonPress,
    isLoading,
    isCheckedTerms,
    isCheckedPrivacy,
    setIsCheckedTerms,
    setIsCheckedPrivacy,
    isBoxesChecked,
    isWarningCheckBoxBorder,
  };
};
