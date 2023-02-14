import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const OfferItemtyled = {
  OfferBtn: styled.TouchableOpacity<{ isSelectedOffer: boolean }>`
    width: ${moderateScale(153)}px;
    height: ${moderateVerticalScale(200)}px;
    padding-horizontal: 10px;
    padding-top: 32px;
    padding-bottom: 24px;
    background-color: ${({ isSelectedOffer }) =>
      isSelectedOffer ? COLOR.background.dullGreen : COLOR.background.white};
    border-radius: 15px;
    border-width: 1px;
    border-color: ${({ isSelectedOffer }) => (isSelectedOffer ? COLOR.primary.green : COLOR.primary.darkBlue)};
  `,
  OfferLabel: styled.View<{ isSelectedOffer: boolean }>`
    position: absolute;
    z-index: 5;
    elevation: 3;
    width: 86px;
    height: 32px;
    top: -15px;
    left: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
    background-color: ${({ isSelectedOffer }) => (isSelectedOffer ? COLOR.primary.green : COLOR.primary.darkBlue)};
  `,
  OfferLabelText: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-size: ${FONTS.size.mediumSmall}px;
    font-weight: ${FONTS.weight.medium};
    line-height: 15px;
    color: ${COLOR.font.white};
  `,
  OfferTitle: styled.Text`
    margin-bottom: 5px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-size: ${FONTS.size.xMedium}px;
    font-weight: ${FONTS.weight.semiBold};
    line-height: 20.4px;
    color: ${COLOR.primary.darkBlue};
  `,
  OfferText: styled.Text<{ marginBottom?: number }>`
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-size: ${FONTS.size.xLmedium}px;
    font-weight: ${FONTS.weight.semiBold};
    line-height: 28.8px;
    color: ${COLOR.primary.green};
  `,
  AdditionalPriceInfo: styled.Text`
    margin-bottom: 16px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-size: ${FONTS.size.mediumSmall}px;
    font-weight: ${FONTS.weight.semiBold};
    line-height: 15.6px;
    color: ${COLOR.primary.green};
  `,
  OfferInfo: styled.Text<{ marginBottom?: number }>`
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${FONTS.size.mediumSmall}px;
    font-weight: ${FONTS.weight.regular};
    line-height: 16.25px;
    color: ${COLOR.subheading};
  `,
};
