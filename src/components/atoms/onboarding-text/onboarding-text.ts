import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

interface IOnboardingText {
  isItalic?: boolean;
  isBold?: boolean;
  isUnderlined?: boolean;
  isCentered?: boolean;
  fontSize?: number;
}

export const OnboardingText = styled.Text<IOnboardingText>`
  font-family: ${props =>
    props.isBold
      ? FONTS.family.mediumBoreal
      : props.isItalic
      ? FONTS.family.lightItalicBoreal
      : FONTS.family.lightBoreal};
  text-align: ${props => (props.isCentered ? 'center' : 'left')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderlined ? 'underline' : 'none')};
  font-weight: ${props => (props.isBold ? FONTS.weight.medium : FONTS.weight.light)};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : `${FONTS.size.xMedium}px`)};
  line-height: 30px;
  color: ${COLOR.text};
`;
