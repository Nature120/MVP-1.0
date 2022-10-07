import styled from 'styled-components/native';

import { CenterContainer } from '@components/atoms/center-container';
import { OnboardingCard } from '@components/atoms/onboarding-card';

import { COLOR } from '@theme/colors';

export const StyledAgreePrivacyPolicy = {
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

  Checkbox: styled.TouchableOpacity<{ bg?: boolean }>`
    background-color: ${({ bg }) => (bg ? COLOR.primary.green : COLOR.background.white)};
    border: 2px solid ${COLOR.primary.green};
    padding: 2px;
    margin-right: 10px;
    width: 20px;
    height: 20px;
  `,
};
