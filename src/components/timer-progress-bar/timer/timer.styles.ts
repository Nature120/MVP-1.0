import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { FONTS } from './../../../theme/fonts';

import { COLOR } from '@theme/colors';

export const TimerStyles = {
  Container: styled.View`
    align-items: center;
  `,
  TextNumber: styled.Text`
    margin-bottom: ${moderateScale(5)}px;
    font-family: ${FONTS.family.boldAcumin};
    font-size: ${moderateScale(FONTS.size.superLarge, 0.1)}px;
    font-weight: ${FONTS.weight.bold};
    line-height: ${moderateScale(76.8)}px;
    color: ${COLOR.primary.darkBlue};
  `,
  IconWrapper: styled.View`
    margin-left: ${moderateScale(4)}px;
  `,
};
