import styled from 'styled-components/native';

import { COLUMN_WIDTH, FIRST_COLUMN_WIDTH } from '../../moods-summary.constants';

export const StyledLines = {
  Line: styled.Image<{ num: number }>`
    position: absolute;
    top: 0;
    left: ${({ num }) => FIRST_COLUMN_WIDTH + COLUMN_WIDTH * num}px;
  `,
};
