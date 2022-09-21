import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '@components/back-button';
import { Layout } from '@components/molecules/layout';
import { SignUpForm } from '@components/sign-up-form/sign-up-form';
import { SocialAuthButton } from '@components/social-auth-button/social-auth-button';

import { isIOS } from '@services/helpers/device-utils';
import { authFaceBook } from '@services/helpers/facebook-auth';
import { authGoogle } from '@services/helpers/google-auth';

import { APP_ROUTES } from '@constants/routes';

import { TNavigation } from '@typings/common';

import { SignUpScreenStyles as Styled } from './sign-up.styles';

export const SignUpScreen = () => {
  const { navigate } = useNavigation<TNavigation>();
  const onGoogleButtonPress = () => {
    authGoogle();
  };

  const onFacebookButtonPress = () => {
    authFaceBook();
  };

  const onAppleButtonPress = () => {
    authFaceBook();
  };

  const onPressLogIn = () => {
    navigate(APP_ROUTES.start.signIn, {});
  };

  const screenLayout = () => (
    <Layout bgColor="beigeLight" isWithScroll={isIOS}>
      <Styled.SafeAreaView>
        <Styled.BackButtonWrapper>
          <BackButton width={32} height={32} color={'darkBlue'} />
        </Styled.BackButtonWrapper>
        <Styled.Title>Create an account</Styled.Title>
        <Styled.Text>Sign up for free to start your journey to wholeness</Styled.Text>
        <Styled.FormWrapper>
          <SignUpForm />
        </Styled.FormWrapper>
        <Styled.LogInWrapper>
          <Styled.LoginText>Already have an account?</Styled.LoginText>
          <Styled.LogInBtn onPress={onPressLogIn}>
            <Styled.LoginLabelText>Login</Styled.LoginLabelText>
          </Styled.LogInBtn>
        </Styled.LogInWrapper>
        <Styled.GoogleButtonWrapper>
          <SocialAuthButton icon="google" labelText="Google" handleAuth={onGoogleButtonPress} />
        </Styled.GoogleButtonWrapper>
        <Styled.FaceBookButtonWrapper>
          <SocialAuthButton icon="facebook" labelText="Facebook" handleAuth={onFacebookButtonPress} />
        </Styled.FaceBookButtonWrapper>
        <Styled.AppleButtonWrapper>
          <SocialAuthButton icon="apple" labelText="Apple" handleAuth={onAppleButtonPress} fill={'darkBlue'} />
        </Styled.AppleButtonWrapper>
      </Styled.SafeAreaView>
    </Layout>
  );

  return (
    <Styled.Container behavior="height">
      {isIOS ? (
        screenLayout()
      ) : (
        <Styled.KeyboardAwareScrollView keyboardShouldPersistTaps="handled" enableOnAndroid={true}>
          {screenLayout()}
        </Styled.KeyboardAwareScrollView>
      )}
    </Styled.Container>
  );
};
