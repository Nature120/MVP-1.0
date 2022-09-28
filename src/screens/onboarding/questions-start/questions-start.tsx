import React from 'react';

import { OnboardingText } from '@components/atoms/onboarding-text/onboarding-text';
import { OnboardingTitle } from '@components/atoms/onboarding-title/onboarding-title';
import { Layout } from '@components/molecules/layout';
import { LayoutOnboarding } from '@components/organisms/layout-onboarding';

import { APP_ROUTES } from '@constants/routes';

export const QuestionsStart: React.FC = () => {
  return (
    <Layout ellipseColor="green" isWithGradient>
      <LayoutOnboarding
        buttonText="continue"
        isButtonWithLink
        routeText="Skip Onboarding"
        onRoutePressNavigateTo={APP_ROUTES.dashboard}>
        <OnboardingTitle>Get Out and Come Home</OnboardingTitle>
        <OnboardingText>Just a few quick questions so that we can best customize your experience</OnboardingText>
      </LayoutOnboarding>
    </Layout>
  );
};
