import styled from 'styled-components/native';

import { ISlideTextProps } from './slide-title.typings';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledSlideTitle = {
  Title: styled.Text<ISlideTextProps>`
    font-family: ${FONTS.family.boldAcumin};
    font-weight: ${props => (props.isBold ? FONTS.weight.bold : FONTS.weight.light)};
    font-size: ${FONTS.size.xLarge}px;
    line-height: 40px;
    color: ${props => (props.isBold ? COLOR.primary.green : COLOR.title)};
    margin-vertical: 24px;
  `,
};
