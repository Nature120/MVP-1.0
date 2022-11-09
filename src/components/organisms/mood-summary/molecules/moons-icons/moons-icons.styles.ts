import styled from 'styled-components/native';

import { COLUMN_WIDTH } from '../../moods-summary.constants';

export const StyledMoonsIcons = {
  MoonsIcons: styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 15px;
  `,
  Moon: styled.View<{ moonSize: number }>`
    margin-left: ${({ moonSize }) => COLUMN_WIDTH - moonSize}px;
  `,
};
