import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const DeleteAskModalStyled = {
  ContainerWrapper: styled.View`
    width: 250px;
    height: 250px;
    padding: 20px 20px;
    background-color: ${COLOR.background.white};
    border-radius: 20px;
  `,
  Text: styled.Text`
    margin-top: 20px;
    text-align: center;
    font-family: ${FONTS.family.lightItalicBoreal};
    font-size: ${FONTS.size.medium}px;
    color: ${COLOR.font.darkBlue};
  `,
  TextQuestion: styled.Text`
    margin-top: 20px;
    text-align: center;
    font-family: ${FONTS.family.mediumBoreal};
    font-size: ${FONTS.size.medium}px;
    color: ${COLOR.font.darkBlue};
  `,
  ButtonWrapper: styled.View`
    margin-top: 40px;
    flex-direction: row;
    padding-horizontal: 40px;
    justify-content: space-between;
  `,
  Btn: styled.TouchableOpacity``,
  BtnText: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-size: ${FONTS.size.medium}px;
    color: ${COLOR.font.darkBlue};
  `,
};
