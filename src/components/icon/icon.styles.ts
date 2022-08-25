import { TStyles } from '@typings/common';
import styled from 'styled-components/native';

export const IconStyles = {
  Wrapper: styled.View<{
    styles?: TStyles;
  }>`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ styles }) => styles};
  `,
};
