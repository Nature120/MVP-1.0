import styled from 'styled-components/native';

import { CenterContainer, OnboardingText } from '@theme/components';

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
