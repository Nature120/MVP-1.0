import React from 'react';

import { BackButton } from '@components/back-button/back-button';
import { Layout } from '@components/layout';
import { SignUp } from '@components/sign-up/sign-up';
import { SocialAuthButton } from '@components/social-auth-button/social-auth-button';

import { AuthScreenStyles as Styled } from './auth-screen.styles';

export const AuthScreen = () => {
  return (
    <Layout isWithScroll={true}>
      <BackButton width={32} height={32} />
      <SignUp />
      <Styled.GoogleButtonWrapper>
        <SocialAuthButton icon="google" labelText="Google" />
      </Styled.GoogleButtonWrapper>
      <SocialAuthButton icon="facebook" labelText="Facebook" />
    </Layout>
  );
};
