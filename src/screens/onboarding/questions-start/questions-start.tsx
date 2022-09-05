import React from 'react';

import { Layout } from '@components/layout';
import { LayoutOnboarding } from '@components/layout-onboarding';

import { APP_ROUTES } from '@constants/routes';

import { OnboardingText } from '@theme/components/onboarding-text';
import { OnboardingTitle } from '@theme/components/onboarding-title';

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
