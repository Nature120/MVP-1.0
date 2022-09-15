import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { FONTS } from './../../theme/fonts';

import { COLOR } from '@theme/colors';

export const TimerProgressBarStyles = {
  Container: styled.View`
    flex: 1;
    align-items: center;
  `,
  TimerWrapper: styled.View`
    position: absolute;
    top: ${moderateScale(70)}px;
  `,
  TimerTitleText: styled.Text`
    align-self: center;
    margin-bottom: ${moderateScale(4)}px;
    font-family: ${FONTS.family.mediumBoreal};
    font-size: ${moderateScale(FONTS.size.xMedium)}px;
    line-height: ${moderateVerticalScale(21.2)}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.subheading};
  `,
};
