import styled from 'styled-components/native';

import { CenterContainer } from '@components/atoms/center-container';
import { OnboardingCard } from '@components/atoms/onboarding-card';

export const StyledAgreeTermsOfServices = {
  Wrapper: styled.View`
    flex: 1;
  `,

  Card: styled(CenterContainer)`
    flex: 1;
    margin-bottom: 24px;
  `,

  OnboardingCard: styled(OnboardingCard)`
    flex-direction: row;
    align-items: center;
  `,
};
