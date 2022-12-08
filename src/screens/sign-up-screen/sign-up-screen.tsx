import React from 'react';

import { Loader } from '@components/atoms/loader/loader';
import { BackButton } from '@components/molecules/back-button';
import { ContainerWithForm } from '@components/organisms/container-with-form/container-with-form';
import { SignUpForm } from '@components/organisms/sign-up-form/sign-up-form';
import { SocialButtonGroup } from '@components/organisms/social-button-group/social-button-group';
import { useSignUpState } from './sign-up-screen.state';

import { SignUpScreenStyles as Styled } from './sign-up-screen.styles';

export const SignUpScreen = () => {
  const {
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
  } = useSignUpState();

  const screenLayout = () => (
    <>
      <Styled.InnerWrapper>
        <Styled.BackButtonWrapper>
          <BackButton width={32} height={32} color={'darkBlue'} />
        </Styled.BackButtonWrapper>
        <Styled.Title>Create an account</Styled.Title>
        <Styled.Text>Sign up for free to start your journey to wholeness</Styled.Text>
        <Styled.FormWrapper>
          <SignUpForm
            isCheckedTerms={isCheckedTerms}
            isCheckedPrivacy={isCheckedPrivacy}
            setIsCheckedTerms={setIsCheckedTerms}
            setIsCheckedPrivacy={setIsCheckedPrivacy}
            isBoxesChecked={isBoxesChecked}
            isWarningCheckBoxBorder={isWarningCheckBoxBorder}
          />
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
    <>{isLoading ? <Loader /> : <ContainerWithForm layout={screenLayout} cssPropContainer={Styled.Container} />}</>
  );
};
