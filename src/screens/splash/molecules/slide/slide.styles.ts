import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledSlide = {
  Slide: styled.View`
    flex: 1;
  `,

  SlideContent: styled.View`
    background-color: transparent;
    margin-horizontal: 24px;
    justify-content: flex-end;
    height: 80%;
  `,

  ImageWrapper: styled.View`
    align-items: center;
    justify-content: center;
  `,

  Description: styled.Text`
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.xMedium}px;
    color: ${COLOR.text};
    line-height: 20px;
  `,

  List: styled.Text`
    line-height: 21px;
    color: ${COLOR.text};
    max-width: 254px;
  `,
};
