import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { Loader } from '@components/atoms/loader/loader';
import { BackButton } from '@components/molecules/back-button';
import { SignInForm } from '@components/organisms/sign-in-form/sign-in-form';
import { SocialButtonGroup } from '@components/organisms/social-button-group/social-button-group';
import { useSignInState } from './sign-in-screen.state';

import { isIOS } from '@services/helpers/device-utils';

import { SignInScreenStyles as Styled } from './sign-in-screen.styles';

export const SignInScreen = () => {
  const { onPressSignUp, onGoogleButtonPress, onFacebookButtonPress, isLoading, onAppleButtonPress } = useSignInState();

  const containerWrapper: StyleProp<ViewStyle> = { flexGrow: 1, justifyContent: 'space-between' };

  const screenLayout = () => (
    <>
      <Styled.InnerWrapper>
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
      </Styled.InnerWrapper>
      <SocialButtonGroup
        onGoogleButtonPress={onGoogleButtonPress}
        onFacebookButtonPress={onFacebookButtonPress}
        onAppleButtonPress={onAppleButtonPress}
      />
    </>
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Styled.Container behavior={isIOS ? 'padding' : 'height'}>
          {isIOS ? (
            <Styled.ScrollViewIOS>{screenLayout()}</Styled.ScrollViewIOS>
          ) : (
            <Styled.ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={containerWrapper}>
              {screenLayout()}
            </Styled.ScrollView>
          )}
        </Styled.Container>
      )}
    </>
  );
};
