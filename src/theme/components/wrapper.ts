import styled from 'styled-components/native';

import { TStyles } from '@typings/common';

interface IStyles {
  styles?: TStyles;
}

export const Wrapper = styled.View<IStyles>`
  ${props => props.styles}
`;

export const ScrollableWrapper = styled.ScrollView<IStyles>`
  ${props => props.styles}
`;
