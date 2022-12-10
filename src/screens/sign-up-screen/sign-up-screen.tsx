import React from 'react';

import { Loader } from '@components/atoms/loader/loader';
import { BackButton } from '@components/molecules/back-button';
import { LayoutWithForm } from '@components/organisms/layout-with-form/layout-with-form';
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

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <LayoutWithForm cssPropContainer={Styled.Container}>
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
              nameOfScreen="authorization"
              onGoogleButtonPress={onGoogleButtonPress}
              onFacebookButtonPress={onFacebookButtonPress}
              onAppleButtonPress={onAppleButtonPress}
            />
          </Styled.InnerWrapper>
        </LayoutWithForm>
      )}
    </>
  );
};
