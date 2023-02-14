import { TextInput } from 'react-native-paper';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const SignUpFormStyles = {
  ErrorText: styled.Text`
    height: ${verticalScale(25)}px;
    margin-top: ${moderateScale(2)}px;
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${moderateScale(FONTS.size.xSmall)}px;
    font-weight: ${FONTS.weight.light};
    color: ${COLOR.font.red};
  `,
  InputPassword: styled(TextInput)`
    height: ${verticalScale(56)}px;
    width: 100%;
    background-color: ${COLOR.background.white};
    border-radius: 4px;

    font-size: ${moderateScale(FONTS.size.xMedium)}px;
    line-height: ${moderateScale(21)}px;
    font-weight: ${FONTS.weight.light};
  `,
  ClosedEye: styled.Image`
    width: 24px;
    height: 24px;
  `,
};
