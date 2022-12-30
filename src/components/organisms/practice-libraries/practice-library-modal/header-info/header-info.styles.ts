import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

const imageIndent = 15;

const audioLabelStyles = css`
  position: absolute;
  padding: 8px 20px;
  right: 24px;
  bottom: ${imageIndent + 24}px;
  align-items: center;
  justify-content: center;
  background: ${COLOR.primary.green};
  border-radius: 100px;
`;

export const HeaderInfoStyled = {
  TypeContainer: styled.View`
    padding: 8px 12px;
    border-radius: 100px;
    position: absolute;
    left: 24px;
    bottom: ${imageIndent + 24}px;
    background: ${COLOR.background.dark};
    align-items: center;
    justify-content: center;
  `,
  AudioLabel: styled.View`
    ${audioLabelStyles}
  `,
  AudioBtn: styled.TouchableOpacity`
    ${audioLabelStyles}
    width:90px;
    height: 35px;
  `,
  AudioLabelText: styled.Text`
    font-family: ${FONTS.family.regularBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 19px;
    color: ${COLOR.font.white};
  `,
  Type: styled.Text`
    font-family: ${FONTS.family.regularBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 19px;
    color: ${COLOR.font.white};
  `,
};
