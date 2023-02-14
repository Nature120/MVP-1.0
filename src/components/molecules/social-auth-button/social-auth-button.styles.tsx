import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const SocialAuthButtonStyles = {
  ButtonWrapper: styled.TouchableOpacity`
    padding: ${moderateScale(12)}px ${moderateScale(28)}px;
    flex-direction: row;
    align-items: center;
    background-color: ${COLOR.background.white};
    border-radius: 50px;
  `,
  Icon: css`
    margin-right: ${moderateScale(12.5)}px;
  `,
  Text: styled.Text`
    font-family: ${FONTS.family.mediumAcumin};
    font-size: ${moderateScale(FONTS.size.xMedium)}px;
    font-weight: ${FONTS.weight.medium};
    line-height: ${moderateScale(20)}px;
    color: ${COLOR.font.black};
    margin-top: 3px;
  `,
};
