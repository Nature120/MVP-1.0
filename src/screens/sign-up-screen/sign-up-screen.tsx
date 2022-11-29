import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { Loader } from '@components/atoms/loader/loader';
import { BackButton } from '@components/molecules/back-button';
import { SignUpForm } from '@components/organisms/sign-up-form/sign-up-form';
import { SocialButtonGroup } from '@components/organisms/social-button-group/social-button-group';
import { useSignUpState } from './sign-up-screen.state';

import { isIOS } from '@services/helpers/device-utils';

import { SignUpScreenStyles as Styled } from './sign-up-screen.styles';

export const SignUpScreen = () => {
  const { onPressLogIn, onGoogleButtonPress, onFacebookButtonPress, onAppleButtonPress, isLoading } = useSignUpState();

  const containerWrapper: StyleProp<ViewStyle> = { flexGrow: 1, justifyContent: 'space-between' };

  const screenLayout = () => (
    <>
      <Styled.InnerWrapper>
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
        <SocialButtonGroup
          onGoogleButtonPress={onGoogleButtonPress}
          onFacebookButtonPress={onFacebookButtonPress}
          onAppleButtonPress={onAppleButtonPress}
        />
      </Styled.InnerWrapper>
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
