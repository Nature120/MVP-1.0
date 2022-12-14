import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const MainSectionStyled = {
  Container: styled.View`
    flex: 1;
    width: 100%;
    padding-horizontal: 24px;
    padding-top: 24px;
    padding-bottom: 16px;
    background-color: ${COLOR.background.white};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  `,
  BenefitWrapper: styled.View`
    flex-direction: row;
  `,
  BenefitText: styled.Text<{ index: number }>`
    margin-left: 8px;
    margin-bottom:${({ index }) => (index === 5 ? 0 : 8)}px;
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${FONTS.size.mediumSmall}px;
    font-weight:${FONTS.weight.regular}
    line-height: 16.25px;
    color: ${COLOR.subheading};
  `,
  OfferingsWrapper: styled.View`
    flex-direction: row;
    margin-top: 40px;
  `,
};
