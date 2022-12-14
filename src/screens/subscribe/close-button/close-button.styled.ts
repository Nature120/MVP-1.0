import styled, { css } from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';

export const CloseButtonStyled = {
  Container: styled.View`
    width: 36px;
    height: 36px;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    align-items: center;
    background-color: ${COLOR.background.white};
    border-radius: 50px;

    ${!isIOS &&
    css`
      shadow-color: ${COLOR.shadow.black};
      shadow-offset: {width: 0, height: 6};
      shadow-opacity: 0.34;
      shadow-radius: 6.27px;
    `}
  `,
};
