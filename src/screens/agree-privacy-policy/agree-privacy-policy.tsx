import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { OnboardingText } from '@components/atoms/onboarding-text/onboarding-text';
import { ButtonOnboarding } from '@components/molecules/button-onboarding';
import { Layout } from '@components/molecules/layout';
import { CheckBox } from './molecules/check-box';

import { APP_ROUTES } from '@constants/routes';

import { StyledAgreePrivacyPolicy as Styled } from './agree-privacy-policy.styles';

export const AgreePrivacyPolicy: React.FC = () => {
  const { navigate } = useNavigation();
  const [isCheckBoxActive, setIsCheckBoxActive] = useState(false);

  const navigateToPrivacyPolicy = () => {
    navigate(APP_ROUTES.privacyPolicy as never);
  };

  const toggleCheckBox = () => {
    setIsCheckBoxActive(!isCheckBoxActive);
  };

  const navigateToOnboarging = () => {
    navigate(APP_ROUTES.start.onBoard as never);
  };

  return (
    <Layout ellipseColor="green" isWithGradient>
      <Styled.Wrapper>
        <Styled.Card>
          <Styled.OnboardingCard>
            <CheckBox isCheckBoxActive={isCheckBoxActive} toggleCheckBox={toggleCheckBox} />

            <OnboardingText>
              I agree to the{' '}
              <OnboardingText isUnderlined onPress={navigateToPrivacyPolicy}>
                Privacy Policy
              </OnboardingText>
            </OnboardingText>
          </Styled.OnboardingCard>
        </Styled.Card>
      </Styled.Wrapper>
      <ButtonOnboarding buttonText="continue" onPress={navigateToOnboarging} isDisabled={!isCheckBoxActive} />
    </Layout>
  );
};
