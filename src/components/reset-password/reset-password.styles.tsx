import { moderateScale, scale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import { FONTS } from '../../theme/fonts';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';

export const ResetPasswordStyled = {
  Container: css`
    flex: 1;
    background-color: ${COLOR.background.beigeLight};
  `,
  BackButtonWrapper: styled.View`
    width: ${scale(32)}px;
  `,
  Title: styled.Text`
    margin-top: 24px;
    margin-left: 15px;
    margin-bottom: 24px;
    font-family: ${FONTS.family.regularBoreal};
    font-size: ${FONTS.size.large}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.font.darkBlue};
  `,
  Wrapper: styled.View`
    margin-bottom: 35px;
  `,
  Header: styled.View`
    align-items: flex-start;
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
