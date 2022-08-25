import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';
import styled from 'styled-components/native';
import { ISlideTextProps } from './slide.typings';

export const StyledSlide = {
  Slide: styled.View`
    background-color: transparent;
    margin-horizontal: 24px;
  `,

  Title: styled.Text`
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.large};
    line-height: 29px;
    color: ${COLOR.text};
    margin-bottom: 16px;
  `,

  Text: styled.Text<ISlideTextProps>`
    font-family: ${FONTS.family.regularBoreal};
    font-weight: ${props =>
      props.isBold ? FONTS.weight.semiBold : FONTS.weight.light};
    font-size: ${FONTS.size.xMedium};
    color: ${COLOR.text};
    line-height: 21px;
    max-width: ${props => (props.isFullWidth ? 'auto' : '254px')};
    margin-bottom: ${props => (props.isFullWidth ? '12px' : '0')};
  `,

  List: styled.Text`
    line-height: 21px;
    color: ${COLOR.text};
    max-width: 254px;
  `,
};
