import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledSplash = {
  SliderContainer: styled.View`
    flex: 1;
  `,

  Actions: styled.View`
    height: 92px;
    margin-horizontal: 24px;
    align-items: center;
    margin-bottom: 36px;
  `,

  Button: styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    background: #00622d;
    border-radius: 50px;
  `,

  SubButton: styled.View`
    margin-top: 24px;
    flex-direction: row;
  `,

  SubButtonText: styled.Text`
    font-family: ${FONTS.family.lightBoreal};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.xSmall};
    line-height: 18px;
    color: ${COLOR.subheading};
  `,

  SignIn: styled.Text`
    margin-left: 8px;
    font-family: ${FONTS.family.boldAcumin};
    font-weight: ${FONTS.weight.bold};
    font-size: ${FONTS.size.xSmall};
    line-height: 17px;
    color: ${COLOR.subheading};
  `,

  ButtonText: styled.Text`
    text-transform: uppercase;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-weight: ${FONTS.weight.bold};
    font-size: ${FONTS.size.xMedium};
    line-height: 20px;
    letter-spacing: 4.25px;
    color: ${COLOR.font.white};
  `,

  Ellipses: styled.Image`
    position: absolute;
    width: 100%;
    height: 423;
    bottom: 0;
    z-index: -1;
  `,
};
