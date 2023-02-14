import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const TeacherProfilePracticesStyled = {
  Container: styled.View`
    flex-grow: 1;
  `,
  Title: styled.Text`
    margin-bottom: 24px;
    font-family: ${FONTS.family.boldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xLarge}px;
    line-height: 36px;
    color: ${COLOR.primary.darkBlue};
  `,
  SubTitle: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.mediumSmall}px;
    line-height: 16.25px;
    color: ${COLOR.font.cloudyBlue};
  `,
  LoadingText: styled.Text`
    height: 20px;
    align-self: center;
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.mediumSmall}px;
    line-height: 16.25px;
    color: ${COLOR.font.cloudyBlue};
  `,
};
