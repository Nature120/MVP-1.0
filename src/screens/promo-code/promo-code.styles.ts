import styled, { css } from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';

export const PromoCodeScreenStyled = {
  Container: css`
    flex: 1;
    background-color: ${COLOR.background.darkWhite};
  `,
  Wrapper: styled.View`
    flex: 1;
    margin-top: ${isIOS ? '50' : '24'}px;
    margin-bottom: 24px;
  `,
  LogoIcon: styled.Image`
    width: 250px;
    height: 250px;
    align-self: center;
  `,
};
