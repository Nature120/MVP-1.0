import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component';

import { DEVICE_WIDTH } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledPracticeLibrary = {
  PracticeLibrary: styled.TouchableOpacity`
    width: ${(DEVICE_WIDTH * 42) / 100}px; //42% of device width
  `,

  Image: styled.Image`
    border-radius: 10px;
    width: 100%;
    height: ${moderateScale(103)}px;
  `,

  TypeContainer: styled.View`
    padding: 5px;
    border-radius: 11px;
    position: absolute;
    left: 7px;
    bottom: 6px;
    background: ${COLOR.background.dark};
    align-items: center;
    justify-content: center;
  `,

  Type: styled.Text`
    font-family: ${FONTS.family.regularBoreal};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.small}px;
    line-height: 12px;
    color: ${COLOR.font.white};
  `,

  Title: styled.Text`
    margin: 8px 0 4px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 18px;
    color: ${COLOR.font.darkBlue};
  `,

  Description: styled(TextComponent)`
    font-size: 13px;
    line-height: 16px;
    color: ${COLOR.subheading};
  `,
};
