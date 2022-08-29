import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';
import styled, { css } from 'styled-components/native';
import { IButtonProps, IStyledButtonTextProps } from './button.typings';

export const StyledButton = {
  Button: styled.TouchableOpacity<IButtonProps>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: ${props => props.height}px;
    width: 100%;
    border-radius: 50px;
    background-color: ${props =>
      props.buttonColor && COLOR.primary[props.buttonColor]};

    ${props =>
      props.disabled &&
      css`
        background-color: ${props.buttonColor &&
        COLOR.secondary[props.buttonColor]};
      `}

    ${props => props.styles}
  `,

  Text: styled.Text<IStyledButtonTextProps>`
    color: ${props => props.textColor && COLOR.font[props.textColor]};
    text-transform: ${props => (props.isNotUpper ? 'none' : 'uppercase')};
    font-family: ${FONTS.family.semiBoldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xMedium};
    line-height: 20px;
    letter-spacing: 4.25px;
    ${props => props.textStyles}
  `,
};
