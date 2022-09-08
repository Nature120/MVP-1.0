import { moderateScale, verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { TStyles } from '@typings/common';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const InputStyles = {
  Input: styled.TextInput<{ cssInput?: TStyles }>`
    height: ${verticalScale(56)}px;
    width: 100%;
    padding-left: ${moderateScale(11)}px;
    padding-right: ${moderateScale(11)}px;
    background-color: ${COLOR.background.white};
    border-radius: 4px;

    font-family: ${FONTS.family.lightBoreal};
    font-size: ${moderateScale(FONTS.size.xMedium)}px;
    line-height: ${moderateScale(21)}px;
    font-weight: ${FONTS.weight.light};
    color: ${COLOR.font.lightGrey};
    ${({ cssInput }) => cssInput};
  `,
};
