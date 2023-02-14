import styled from 'styled-components/native';

import { TStyles } from '@typings/common';

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
