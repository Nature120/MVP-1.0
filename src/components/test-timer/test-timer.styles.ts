import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledRing = {
  Wrapper: styled.View`
    background-color: transparent;
    width: 230px;
    height: 230px;
  `,

  Overlay: styled.View`
    justify-content: center;
    align-items: center;
    transform: rotate(-90deg);
    z-index: -1;
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
