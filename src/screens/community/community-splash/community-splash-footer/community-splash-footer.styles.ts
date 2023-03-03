import styled, { css } from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';

export const CommunitySplashFooterStyled = {
  Container: styled.View`
    height: 120px;
    padding-top: 24px;
    padding-horizontal: 24px;
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    align-items: center;
    box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.1);
    background-color: ${COLOR.background.white};
    ${!isIOS &&
    css`
      shadow-color: rgba(0, 0, 0, 0.5);
      shadow-offset: { width: 0, height: -4 };
      shadow-opacity: 1;
      shadow-radius: 7px;
      elevation: 7;
    `}
  `,
  Button: css`
    height: 50px;
  `,
};
