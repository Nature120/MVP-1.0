import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledMoonsList = {
  MoonsList: styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;
  `,

  IconWrapper: styled.View<{ isActive: boolean }>`
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  `,
  Text: styled.Text`
    margin-top: 5px;
    align-self: center;
    font-family: ${FONTS.family.mediumAcumin};
    font-size: ${FONTS.size.xlSmall}px;
    font-weight: ${FONTS.weight.regular};
    color: ${COLOR.subheading};
  `,
};
