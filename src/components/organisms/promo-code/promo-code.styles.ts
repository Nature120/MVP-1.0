import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const PromoCodeStyled = {
  Container: styled.View`
    flex: 1;
  `,
  Title: styled.Text`
    margin-left: 15px;
    margin-bottom: 24px;
    font-family: ${FONTS.family.regularBoreal};
    font-size: ${FONTS.size.large}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.font.darkBlue};
  `,
  PromoInput: css`
    width: 100%;
    margin-bottom: 35px;
  `,
  ButtonCss: css`
    width: 100%;
    height: 60px;
    background-color: ${COLOR.background.blue};
  `,
};
