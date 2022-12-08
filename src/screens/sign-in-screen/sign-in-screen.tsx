import React from 'react';

import { Loader } from '@components/atoms/loader/loader';
import { BackButton } from '@components/molecules/back-button';
import { ContainerWithForm } from '@components/organisms/container-with-form/container-with-form';
import { SignInForm } from '@components/organisms/sign-in-form/sign-in-form';
import { SocialButtonGroup } from '@components/organisms/social-button-group/social-button-group';
import { useSignInState } from './sign-in-screen.state';

import { SignInScreenStyles as Styled } from './sign-in-screen.styles';

export const SignInScreen = () => {
  const { onPressSignUp, onGoogleButtonPress, onFacebookButtonPress, isLoading, onAppleButtonPress, isFirstLaunchApp } =
    useSignInState();

  const screenLayout = () => (
    <>
      <Styled.InnerWrapper isFirstLaunchApp={isFirstLaunchApp}>
        {isFirstLaunchApp && (
          <Styled.BackButtonWrapper>
            <BackButton width={32} height={32} color={'darkBlue'} />
          </Styled.BackButtonWrapper>
        )}
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
    <>{isLoading ? <Loader /> : <ContainerWithForm layout={screenLayout} cssPropContainer={Styled.Container} />}</>
  );
};
