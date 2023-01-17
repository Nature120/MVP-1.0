import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const CollapsedPlayerStyled = {
  Container: styled.View`
    padding-top: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  Wrapper: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  Image: css`
    border-radius: 8px;
    margin-right: 16px;
  `,
  PlayBtn: styled.TouchableOpacity`
    margin-right: 32px;
  `,
  Title: styled.Text`
    width: ${moderateScale(154)}px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 18px;
    font-weight: ${FONTS.weight.semiBold};
    color: ${COLOR.font.darkBlue};
  `,
};
