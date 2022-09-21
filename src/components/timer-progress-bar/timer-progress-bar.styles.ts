import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledRing = {
  Wrapper: styled.View`
    width: ${scale(250)}px;
    height: ${verticalScale(250)}px;
    margin-bottom: ${verticalScale(55)}px;
    justify-content: center;
    align-items: center;
    align-self: center;
    background-color: transparent;
  `,

  Overlay: styled.View`
    justify-content: center;
    align-items: center;
    transform: rotate(-90deg);
    z-index: -1;
  `,
  TimerWrapper: styled.View`
    margin-top: ${moderateScale(14)}px;
    align-items: center;
  `,
  Foreground: styled.View<{ fgRadius: number }>`
    background-color: ${COLOR.background.extraLightMint};
    border-radius: ${props => props.fgRadius}px;
    width: ${props => props.fgRadius * 2}px;
    height: ${props => props.fgRadius * 2}px;
  `,

  Container: styled.View`
    align-items: center;
  `,
  TextNumber: styled.Text`
    font-family: ${FONTS.family.boldAcumin};
    font-size: ${moderateScale(FONTS.size.superLarge, 0.2)}px;
    font-weight: ${FONTS.weight.bold};
    line-height: ${moderateScale(76.8)}px;
    color: ${COLOR.primary.darkBlue};
  `,
  IconWrapper: styled.View`
    margin-left: ${moderateScale(4)}px;
  `,
  TimerTitleText: styled.Text`
    align-self: center;
    font-family: ${FONTS.family.mediumBoreal};
    font-size: ${moderateScale(FONTS.size.xMedium)}px;
    line-height: ${moderateVerticalScale(21.2)}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.subheading};
  `,
};
