import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const OfferItemtyled = {
  OfferBtn: styled.TouchableOpacity`
    width: 163px;
    height: 216px;
    margin-right: 16px;
    border-radius: 15px;
    border-width: 1px;
    border-color: ${COLOR.primary.dark};
  `,
  OfferLabel: styled.View`
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
    background-color: ${COLOR.primary.darkBlue};
  `,
  OfferLabelText: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-size: ${FONTS.size.mediumSmall}px;
    font-weight: ${FONTS.weight.medium};
    line-height: 15px;
    color: ${COLOR.font.white};
  `,
  OfferTitle: styled.Text``,
};
