import styled from 'styled-components/native';

import { COLOR } from './../../theme/colors';

import { FONTS } from '@theme/fonts';

export const BookMarksStyled = {
  MainContainer: styled.SafeAreaView`
    flex: 1;
    background-color: ${COLOR.background.white};
  `,
  Header: styled.View`
    margin-bottom: 24px;
    padding-top: 24px;
    padding-horizontal: 15px;
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
  WarningText: styled.Text`
    align-self: center;
    font-family: ${FONTS.family.regularBoreal};
    font-size: ${FONTS.size.medium}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.font.darkBlue};
  `,
  ItemContainer: styled.View`
    margin-bottom: 30px;
  `,
};
