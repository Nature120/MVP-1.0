import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const flatListStyle = { minHeight: 171 };

export const StyledPracticeLibraries = {
  Title: styled.Text`
    line-height: 29px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.large}px;
    color: ${COLOR.font.darkBlue};
  `,

  Header: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 24px 24px;
  `,
};
