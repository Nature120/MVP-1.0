import React from 'react';

import { OnboardingText } from '@components/atoms/onboarding-text/onboarding-text';
import { ButtonOnboarding } from '@components/molecules/button-onboarding';
import { Layout } from '@components/molecules/layout';
import { useAgreeTermsOfServices } from './agree-terms-of-services.state';
import { CheckBox } from './molecules/check-box';

import { StyledAgreeTermsOfServices as Styled } from './agree-terms-of-services.styles';

export const AgreeTermsOfServices: React.FC = () => {
  const { isAllowRenderPage, isCheckBoxActive, toggleCheckBox, navigateToTermsOfServices, navigateToOnboarding } =
    useAgreeTermsOfServices();

  if (!isAllowRenderPage) {
    return null;
  }

  return (
    <Layout ellipseColor="green" isWithGradient>
      <Styled.Wrapper>
        <Styled.Card>
          <Styled.OnboardingCard>
            <CheckBox isCheckBoxActive={isCheckBoxActive} toggleCheckBox={toggleCheckBox} />

            <OnboardingText>
              I agree to the{' '}
              <OnboardingText isUnderlined onPress={navigateToTermsOfServices}>
                Terms of Services
              </OnboardingText>
            </OnboardingText>
          </Styled.OnboardingCard>
        </Styled.Card>
      </Styled.Wrapper>
      <ButtonOnboarding buttonText="continue" onPress={navigateToOnboarding} isDisabled={!isCheckBoxActive} />
    </Layout>
  );
};
