import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { OnboardingText } from '@components/atoms/onboarding-text/onboarding-text';
import { ButtonOnboarding } from '@components/molecules/button-onboarding';
import { Layout } from '@components/molecules/layout';
import { CheckBox } from './molecules/check-box';

import { getUserInfo } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

import { StyledAgreeTermsOfServices as Styled } from './agree-terms-of-services.styles';

export const AgreeTermsOfServices: React.FC = () => {
  const { navigate } = useNavigation();
  const [isCheckBoxActive, setIsCheckBoxActive] = useState(false);

  const isDefaultValueExists = !!useSelector(getUserInfo).dailyGoal;
  const [isFirstLaunchApp, setIsFirstLaunchApp] = useState(!isDefaultValueExists);
  const [isAllowRenderPage, setIsAllowRenderPage] = useState(!isDefaultValueExists);

  console.log('🛑 ~ isFirstLaunchApp INITIAL', isFirstLaunchApp);
  console.log('🛑 ~ isDefaultValueExists', isDefaultValueExists);

  useEffect(() => {
    setTimeout(() => {
      console.log('🛑 ~ CONDITION', isDefaultValueExists && !isFirstLaunchApp);
      if (isDefaultValueExists && !isFirstLaunchApp) {
        console.log('🛑 NAVIGATE');
        return navigate(APP_ROUTES.dashboard as never);
      }
      setIsAllowRenderPage(true);
    }, 0);
  }, [isDefaultValueExists, navigate, isFirstLaunchApp]);

  const navigateToTermsOfServices = () => {
    navigate(APP_ROUTES.TermsOfServices as never);
  };

  const toggleCheckBox = () => {
    setIsCheckBoxActive(!isCheckBoxActive);
  };

  const navigateToOnboarging = () => {
    setIsFirstLaunchApp(true);
    navigate(APP_ROUTES.start.onBoard as never);
  };

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
      <ButtonOnboarding buttonText="continue" onPress={navigateToOnboarging} isDisabled={!isCheckBoxActive} />
    </Layout>
  );
};
