import React from 'react';

import { Loader } from '@components/atoms/loader/loader';
import { BackButton } from '@components/molecules/back-button';
import { Layout } from '@components/molecules/layout';
import { SignInForm } from '@components/organisms/sign-in-form/sign-in-form';
import { SocialButtonGroup } from '@components/organisms/social-button-group/social-button-group';
import { useSigninState } from './sign-in-screen.state';

import { isIOS } from '@services/helpers/device-utils';

import { SignInScreenStyles as Styled } from './sign-in-screen.styles';

export const SignInScreen = () => {
  const { onPressSignUp, onGoogleButtonPress, onFacebookButtonPress, isLoading, onAppleButtonPress } = useSigninState();

  const screenLayout = () => (
    <Layout bgColor="beigeLight" isWithScroll={isIOS}>
      <Styled.Wrapper>
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
        <SocialButtonGroup
          onGoogleButtonPress={onGoogleButtonPress}
          onFacebookButtonPress={onFacebookButtonPress}
          onAppleButtonPress={onAppleButtonPress} ///Fix
        />
      </Styled.Wrapper>
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
            <Styled.KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
              {screenLayout()}
            </Styled.KeyboardAwareScrollView>
          )}
        </Styled.Container>
      )}
    </>
  );
};
