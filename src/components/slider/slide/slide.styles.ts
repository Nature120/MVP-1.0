import styled from 'styled-components/native';

import { ISlideTextProps } from './slide.typings';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const CloudsStyle = {
  height: 290,
};

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

  Title: styled.Text<ISlideTextProps>`
    font-family: ${FONTS.family.boldAcumin};
    font-weight: ${props =>
      props.isBold ? FONTS.weight.bold : FONTS.weight.light};
    font-size: ${FONTS.size.xLarge};
    line-height: 40px;
    color: ${props => (props.isBold ? COLOR.primary.green : COLOR.title)};
    margin-vertical: 24px;
  `,

  Description: styled.Text`
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.xMedium};
    color: ${COLOR.text};
    line-height: 20px;
  `,

  List: styled.Text`
    line-height: 21px;
    color: ${COLOR.text};
    max-width: 254px;
  `,
};
