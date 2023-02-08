import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const MediaPlayerStyled = {
  Container: styled.View`
    flex: 1;
    margin-horizontal: 24px;
  `,
  NotReadyContainer: styled.View`
    flex: 1;
    padding-top: 15px;
    margin-horizontal: 24px;
    align-items: center;
  `,
  WorningText: styled.Text`
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${FONTS.size.medium}px;
    font-weight: ${FONTS.weight.regular};
    color: ${COLOR.font.darkBlue};
  `,
};
