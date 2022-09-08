import React from 'react';

import { BackButton } from '@components/back-button/back-button';
import { Layout } from '@components/layout';
import { SignUpForm } from '@components/sign-up-form/sign-up-form';
import { SocialAuthButton } from '@components/social-auth-button/social-auth-button';

import { authFaceBook, authGoogle } from './sign-up-screen.utils';

import { AuthScreenStyles as Styled } from './sign-up.styles';

export const SignUpScreen = () => {
  const onGoogleButtonPress = async () => {
    try {
      authGoogle();
    } catch (error) {
      console.log('error', error);
    }
  };

  const onFacebookButtonPress = async () => {
    try {
      authFaceBook();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Styled.Container behavior="height">
      <Styled.KeyboardAwareScrollView keyboardShouldPersistTaps="handled" enableOnAndroid={false}>
        <Layout bgColor="beigeLight" isWithScroll={false}>
          <Styled.BackButtonWrapper>
            <BackButton width={32} height={32} />
          </Styled.BackButtonWrapper>
          <Styled.Title>Create an account</Styled.Title>
          <Styled.Text>Sign up for free to start your journey to wholeness</Styled.Text>
          <Styled.FormWrapper>
            <SignUpForm />
          </Styled.FormWrapper>
          <Styled.LogInBtn>
            <Styled.LoginText>Already have an account?</Styled.LoginText>
            <Styled.LoginLabelText>Login</Styled.LoginLabelText>
          </Styled.LogInBtn>
          <Styled.GoogleButtonWrapper>
            <SocialAuthButton icon="google" labelText="Google" handleAuth={onGoogleButtonPress} />
          </Styled.GoogleButtonWrapper>
          <Styled.FaceBookButtonWrapper>
            <SocialAuthButton icon="facebook" labelText="Facebook" handleAuth={onFacebookButtonPress} />
          </Styled.FaceBookButtonWrapper>
        </Layout>
      </Styled.KeyboardAwareScrollView>
    </Styled.Container>
  );
};
