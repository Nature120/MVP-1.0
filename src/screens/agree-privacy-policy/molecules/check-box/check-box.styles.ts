import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';

export const StyledCheckBox = {
  CheckBox: styled.TouchableOpacity<{ isCheckBoxActive?: boolean }>`
    background-color: ${({ isCheckBoxActive }) => (isCheckBoxActive ? COLOR.primary.green : COLOR.background.white)};
    border: 2px solid ${COLOR.primary.green};
    padding: 2px;
    margin-right: 10px;
    width: 20px;
    height: 20px;
  `,
};
