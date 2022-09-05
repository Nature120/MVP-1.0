import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

interface ITextComponentProps {
  isItalic?: boolean;
  isBold?: boolean;
  isUnderlined?: boolean;
  isCentered?: boolean;
  fontSize?: number;
  lineHeight?: number;
}

export const TextComponent = styled.Text<ITextComponentProps>`
  font-family: ${FONTS.family.regularBoreal};
  text-align: ${props => (props.isCentered ? 'center' : 'left')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderlined ? 'underline' : 'none')};
  font-weight: ${props => (props.isBold ? FONTS.weight.medium : FONTS.weight.regular)};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : `${FONTS.size.xMedium}px`)};
  line-height: ${props => (props.lineHeight ? `${props.lineHeight}px` : '20px')};
  color: ${COLOR.text};
`;
