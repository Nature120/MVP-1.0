import styled from 'styled-components/native';

import { IStyledButtonWithLinkProps } from './button-with-link.typings';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledButtonWithLink = {
  ButtonWithLink: styled.View<IStyledButtonWithLinkProps>`
    margin-horizontal: ${props => (props.isWithMagrin ? '24px' : 0)};
    align-items: center;
    margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 24)}px;
  `,

  SubButton: styled.View`
    margin-top: 24px;
    flex-direction: row;
    align-items: center;
  `,

  TouchableText: styled.Text<{ isBottomText: boolean }>`
    margin-left: ${props => (props.isBottomText ? 8 : 0)}px;
    font-family: ${FONTS.family.boldAcumin};
    font-weight: ${FONTS.weight.bold};
    font-size: ${FONTS.size.xSmall}px;
    line-height: 17px;
    color: ${COLOR.subheading};
  `,

  SubButtonText: styled.Text`
    font-family: ${FONTS.family.lightBoreal};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.xSmall}px;
    line-height: 18px;
    color: ${COLOR.subheading};
  `,
};
