import { CenterContainer, OnboardingText } from '@theme/components';
import styled from 'styled-components/native';

export const StyledStart = {
  Card: styled(CenterContainer)`
    flex: 1;
  `,
  CardText: styled(OnboardingText)`
    font-size: 20px;
    line-height: 25;
    text-align: center;
  `,
};
