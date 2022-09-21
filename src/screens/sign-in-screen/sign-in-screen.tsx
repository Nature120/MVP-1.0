import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '@components/back-button';
import { Layout } from '@components/molecules/layout';
import { SignInForm } from '@components/sign-in-form/sign-in-form';
import { SocialAuthButton } from '@components/social-auth-button/social-auth-button';

import { isIOS } from '@services/helpers/device-utils';
import { authFaceBook } from '@services/helpers/facebook-auth';
import { authGoogle } from '@services/helpers/google-auth';

import { APP_ROUTES } from '@constants/routes';

import { TNavigation } from '@typings/common';

import { SignInScreenStyles as Styled } from './sign-in-screen.styles';

export const SignInScreen = () => {
  const { navigate } = useNavigation<TNavigation>();
  const onGoogleButtonPress = () => {
    authGoogle();
  };

  const onFacebookButtonPress = () => {
    authFaceBook();
  };

  const onPressSignUp = () => {
    navigate(APP_ROUTES.start.signUp, {});
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
