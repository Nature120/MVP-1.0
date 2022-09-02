import React from 'react';

import { Layout } from '@components/layout';
import { LayoutOnboarding } from '@components/layout-onboarding';

import { DEVICE_HEIGHT } from '@services/helpers/device-utils';

import { StyledThankYou as Styled } from './thank-you.styles';

import { OnboardingCard, OnboardingText, OnboardingTitle } from '@theme/components';

export const ThankYou: React.FC = () => {
  return (
    <Layout ellipseColor="green" isWithGradient isWithScroll>
      <LayoutOnboarding buttonText="CONTINUE">
        <OnboardingTitle isCentered>Thank you!</OnboardingTitle>
        <OnboardingText isItalic isCentered fontSize={20}>
          Almost there. . .
        </OnboardingText>

        <Styled.Card>
          <OnboardingCard isSmall={DEVICE_HEIGHT < 680}>
            <OnboardingText fontSize={24} isCentered>
              Let us help make spending time in nature a part of your every day routine
            </OnboardingText>
          </OnboardingCard>
        </Styled.Card>
      </LayoutOnboarding>
    </Layout>
  );
};
