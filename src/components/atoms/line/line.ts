import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';

interface ILineProps {
  marginTop?: number;
  marginBottom?: number;
  width?: number;
}

export const Line = styled.View<ILineProps>`
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  width: ${props => props.width || 100}%;
  height: 1px;
  background-color: ${COLOR.background.textInput};
`;
