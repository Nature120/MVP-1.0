import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Loader } from '@components/atoms/loader/loader';
import { BackButton } from '@components/molecules/back-button';
import { Layout } from '@components/molecules/layout';
import { SocialAuthButton } from '@components/molecules/social-auth-button/social-auth-button';
import { SignInForm } from '@components/organisms/sign-in-form/sign-in-form';

import { isIOS } from '@services/helpers/device-utils';
import { authFaceBook } from '@services/helpers/facebook-auth';
import { authGoogle } from '@services/helpers/google-auth';
import { isFirstLaunch } from '@services/store/auth/auth.actions';
import { getLoading } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

import { TNavigation } from '@typings/common';

import { SignInScreenStyles as Styled } from './sign-in-screen.styles';

export const SignInScreen = () => {
  const { navigate } = useNavigation<TNavigation>();
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

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

  const onPressSignUp = () => {
    navigate(APP_ROUTES.start.signUp, {});
  };

  const isFirstLaunchCheck = async () => {
    const value = await AsyncStorage.getItem('isFirstLaunchNature120');
    const isFirstTime = value === 'true';
    if (isFirstTime) {
      return dispatch(isFirstLaunch(true));
    }
    dispatch(isFirstLaunch(false));
  };
  const screenLayout = () => (
    <Layout bgColor="beigeLight" isWithScroll={isIOS}>
      <Styled.SafeAreaView>
        <Styled.BackButtonWrapper>
          <BackButton width={32} height={32} color={'darkBlue'} />
        </Styled.BackButtonWrapper>
        <Styled.Title>Sign in account</Styled.Title>
        <Styled.Text>Sign in for free to start your journey to wholeness</Styled.Text>
        <Styled.FormWrapper>
          <SignInForm />
        </Styled.FormWrapper>
        <Styled.LogInWrapper>
          <Styled.LoginText>Have no account yet?</Styled.LoginText>
          <Styled.LogInBtn onPress={onPressSignUp}>
            <Styled.LoginLabelText>Register</Styled.LoginLabelText>
          </Styled.LogInBtn>
        </Styled.LogInWrapper>
        <Styled.GoogleButtonWrapper>
          <SocialAuthButton icon="google" labelText="Google" handleAuth={onGoogleButtonPress} />
        </Styled.GoogleButtonWrapper>
        <Styled.FaceBookButtonWrapper>
          <SocialAuthButton icon="facebook" labelText="Facebook" handleAuth={onFacebookButtonPress} />
        </Styled.FaceBookButtonWrapper>
        <Styled.AppleButtonWrapper>
          <SocialAuthButton icon="apple" labelText="Apple" handleAuth={onFacebookButtonPress} fill={'darkBlue'} />
        </Styled.AppleButtonWrapper>
      </Styled.SafeAreaView>
    </Layout>
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Styled.Container behavior="height">
          {isIOS ? (
            screenLayout()
          ) : (
            <Styled.KeyboardAwareScrollView keyboardShouldPersistTaps="handled" enableOnAndroid={true}>
              {screenLayout()}
            </Styled.KeyboardAwareScrollView>
          )}
        </Styled.Container>
      )}
    </>
  );
};
