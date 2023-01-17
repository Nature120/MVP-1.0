import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const MediaPlayerStyled = {
  Container: styled.View`
    flex: 1;
    margin-horizontal: 24px;
  `,
  WorningText: styled.Text`
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${FONTS.size.medium}px;
    font-weight: ${FONTS.weight.regular};
    color: ${COLOR.font.darkBlue};
  `,
};
