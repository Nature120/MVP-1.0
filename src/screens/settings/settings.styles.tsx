import styled, { css } from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';

export const SettingsStyled = {
  Container: css`
    flex: 1;
    background-color: ${COLOR.background.beigeLight};
  `,
  Wrapper: styled.View`
    margin-top: ${isIOS ? '50' : '24'}px;
    margin-bottom: 35px;
  `,
  Header: styled.View`
    align-items: flex-start;
  `,
};
