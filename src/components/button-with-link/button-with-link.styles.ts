import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';
import styled from 'styled-components/native';
import { IStyledButtonWithLinkProps } from './button-with-link.typings';

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

  TouchableText: styled.Text`
    margin-left: 8px;
    font-family: ${FONTS.family.boldAcumin};
    font-weight: ${FONTS.weight.bold};
    font-size: ${FONTS.size.xSmall};
    line-height: 17px;
    color: ${COLOR.subheading};
  `,

  SubButtonText: styled.Text`
    font-family: ${FONTS.family.lightBoreal};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.xSmall};
    line-height: 18px;
    color: ${COLOR.subheading};
  `,
};
