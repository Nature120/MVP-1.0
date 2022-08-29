import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';

export const StyledModalBottom = {
  ModalBottom: styled.View`
    min-height: 370px;
    background-color: ${COLOR.background.white};
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    padding: 24px;
  `,
};
