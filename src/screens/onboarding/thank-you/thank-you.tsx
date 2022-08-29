import React from 'react';

import { Layout } from '@components/layout';
import { LayoutOnboarding } from '@components/layout-onboarding';
import { OnboardingCard, OnboardingText, OnboardingTitle } from '@theme/components';
import { StyledThankYou as Styled } from './thank-you.styles';

export const ThankYou: React.FC = () => {
  return (
    <Layout ellipseColor="green" isWithGradient>
      <LayoutOnboarding buttonText="CONTINUE">
        <OnboardingTitle isCentered>Thank you!</OnboardingTitle>
        <OnboardingText isItalic isCentered fontSize={20}>
          Almost there. . .
        </OnboardingText>

        <Styled.Card>
          <OnboardingCard>
            <OnboardingText fontSize={24} isCentered>
              Let us help make spending time in nature a part of your every day routine
            </OnboardingText>
          </OnboardingCard>
        </Styled.Card>
      </LayoutOnboarding>
    </Layout>
  );
};
