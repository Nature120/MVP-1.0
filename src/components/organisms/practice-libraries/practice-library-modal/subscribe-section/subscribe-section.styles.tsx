import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const SubscribeSectionStyled = {
  Container: styled.View`
    flex: 1;
    height: 390px;
    width: 100%;
    margin-top: 15px;
    padding-top: 56px;
    padding-bottom: 48px;
    padding-horizontal: 24px;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    background-color: ${COLOR.background.white};
  `,
  Title: styled.Text`
    margin-top: 38px;
    font-family: ${FONTS.family.mediumAcumin};
    font-size: ${FONTS.size.xMedium}px;
    font-weight: ${FONTS.weight.semiBold};
    line-height: 20.4px;
    color: ${COLOR.font.darkBlue};
  `,
  Text: styled.Text`
    margin-top: 9px;
    text-align: center;
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${FONTS.size.xlSmall}px;
    font-weight: ${FONTS.weight.regular};
    line-height: 18.75px;
    color: ${COLOR.subheading};
  `,
  Btn: css`
    margin-top: 48px;
  `,
};
