import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';

export const OnboardingCard = styled.View<{ isSmall?: boolean }>`
  background-color: ${COLOR.background.white};
  padding: ${props => (props.isSmall ? '32px 22px' : '22px')};
  width: 100%;
  height: ${props => (props.isSmall ? 200 : 250)}px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
