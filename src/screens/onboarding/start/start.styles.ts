import styled from 'styled-components/native';

import { CenterContainer } from '@components/atoms/center-container';
import { OnboardingText } from '@components/atoms/onboarding-text';

export const imageStyle = { flex: 1 };

export const StyledStart = {
  Card: styled(CenterContainer)`
    flex: 1;
    margin-bottom: 24px;
  `,
  CardText: styled(OnboardingText)`
    font-size: 20px;
    line-height: 25px;
    text-align: center;
  `,
};
