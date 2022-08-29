import { moderateScale, verticalScale } from 'react-native-size-matters';
import { FlattenInterpolation } from 'styled-components';
import styled, { ThemeProps } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const InputStyles = {
  Input: styled.TextInput<{ cssInput?: FlattenInterpolation<ThemeProps<any>> }>`
    height: ${verticalScale(56)}px;
    width: 100%;
    padding-left: ${moderateScale(11, 0.1)}px;
    padding-right: ${moderateScale(11, 0.1)}px;
    background-color: ${COLOR.background.white};
    border-radius: 4px;

    font-family: ${FONTS.family.lightBoreal};
    font-size: ${moderateScale(17, 0.1)}px;
    line-height: ${moderateScale(21, 0.1)}px;
    font-weight: 400;
    color: ${COLOR.font.lightGrey};
    ${({ cssInput }) => cssInput};
  `,
};
