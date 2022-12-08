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
  Title: styled.Text`
    margin-left: 15px;
    margin-bottom: 24px;
    font-family: ${FONTS.family.regularBoreal};
    font-size: ${FONTS.size.large}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.font.darkBlue};
  `,
};
