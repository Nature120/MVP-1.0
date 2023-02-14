import { verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledCommunity = {
  Container: styled.View`
    flex: 1;
    background-color: ${COLOR.background.extraLightMint};
  `,
  Title: styled.Text`
    margin-top: ${isIOS ? verticalScale(65) : verticalScale(25)}px;
    margin-bottom: 16px;
    margin-left: 24px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xLarge}px;
    line-height: 36px;
    color: ${COLOR.title};
  `,
};
