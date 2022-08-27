import { TStyles } from '@typings/common';
import styled from 'styled-components/native';

interface IStyles {
  styles?: TStyles;
}

export const Wrapper = styled.View<IStyles>`
  ${props => props.styles}
`;

export const ScrollableWrapper = styled.ScrollView<IStyles>`
  ${props => props.styles}
`;
