import { moderateScale, verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const AdditionalInfoStyled = {
  Container: styled.View`
    flex: 1;
    padding-top: 32px;
    flex-direction: row;
    justify-content: space-between;
    border-top-width: 1px;
    border-top-color: ${COLOR.background.textInput};
    border-top-style: solid;
  `,
  InfoWrapper: styled.View`
    flex-direction: column;
    align-items: center;
    width: ${moderateScale(90)}px;
    height: ${verticalScale(40)}px;
  `,
  Text: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-size: ${FONTS.size.mediumSmall}px;
    font-weight: ${FONTS.weight.medium};
    line-height: 16.25px;
    color: ${COLOR.font.cloudyBlue};
  `,
};
