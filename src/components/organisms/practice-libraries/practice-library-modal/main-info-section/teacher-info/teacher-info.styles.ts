import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const TeacherInfoStyled = {
  Container: styled.TouchableOpacity`
    flex: 1;
    margin-top: 20px;
    padding: 24px 0px;
    flex-direction: row;
    border-top-width: 1px;
    border-top-color: ${COLOR.background.textInput};
    border-top-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${COLOR.background.textInput};
    border-bottom-style: solid;
  `,
  Image: css`
    border-radius: 50px;
    margin-right: 16px;
  `,
  WrapperTeacherInfo: styled.View`
    flex-direction: column;
  `,
  TextFullName: styled.Text`
    font-family: ${FONTS.family.semiBoldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 18px;
    color: ${COLOR.primary.darkBlue};
  `,
  TextLocation: styled.Text`
    margin-bottom: 3px;
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.mediumSmall}px;
    line-height: 16.25px;
    color: ${COLOR.font.cloudyBlue};
    max-width: 95%;
  `,
};
