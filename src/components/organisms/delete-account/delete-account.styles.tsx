import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const DeleteAccountStyled = {
  Container: css`
    flex: 1;
    background-color: ${COLOR.background.beigeLight};
  `,
  InnerWrapper: styled.View`
    flex: 1;
    padding-top: 50px;
  `,
  Header: styled.View`
    margin-bottom: 24px;
    padding-top: 24px;
    align-items: flex-start;
  `,
  TipsContainer: styled.View`
    width: 100%;
    height: 90px;
    padding: 15px;
    margin-bottom: 50px;
    border-radius: 20px;
    background-color: ${COLOR.background.extraLightMint};
  `,
  Tip: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-size: ${FONTS.size.xSmall}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.font.darkBlue};
  `,
  TipText: styled.Text`
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${FONTS.size.small}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.font.darkBlue};
  `,
  Title: styled.Text`
    margin-left: 15px;
    margin-bottom: 24px;
    font-family: ${FONTS.family.regularBoreal};
    font-size: ${FONTS.size.large}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.font.darkBlue};
  `,
};
