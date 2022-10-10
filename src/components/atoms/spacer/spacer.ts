import styled from 'styled-components/native';

import { equalHorizontal, equalVertical, horizontal, vertical } from './spacer.utils';

import { ISpacerProps } from './spacer.typings';

export const Spacer = styled.View<ISpacerProps>`
  ${({ isHorizontal, isEqual, ...controlProps }) =>
    isHorizontal
      ? isEqual
        ? equalHorizontal(controlProps)
        : horizontal(controlProps)
      : isEqual
      ? equalVertical(controlProps)
      : vertical(controlProps)}
`;
