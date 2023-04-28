import React from 'react';

import { OnboardingCard } from '@components/atoms/onboarding-card';
import { OnboardingText } from '@components/atoms/onboarding-text';
import { OnboardingTitle } from '@components/atoms/onboarding-title';
import { Layout } from '@components/molecules/layout';
import { LayoutOnboarding } from '@components/organisms/layout-onboarding';

import { DEVICE_HEIGHT } from '@services/helpers/device-utils';

import { StyledThankYou as Styled } from './thank-you.styles';
export const ThankYou: React.FC = () => {
  return (
    <Layout ellipseColor="green" isWithGradient isWithScroll>
      <LayoutOnboarding buttonText="CONTINUE">
        <OnboardingTitle isCentered allowFontScaling={false}>
          Thank you!
        </OnboardingTitle>
        <OnboardingText allowFontScaling={false} isItalic isCentered fontSize={20}>
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
