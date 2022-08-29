import React from 'react';

import { IButtonProps } from './button.typings';

import { StyledButton as Styled } from './button.styles';

export const Button: React.FC<IButtonProps> = props => {
  const {
    onPress,
    isDisabled,
    height = 61,
    textColor = 'white',
    buttonColor = 'green',
    activeOpacity = 0.8,
    styles,
    isNotUpper,
    buttonText,
    textStyles,
  } = props;
  return (
    <Styled.Button
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={activeOpacity}
      buttonColor={buttonColor}
      height={height}
      styles={styles}>
      <Styled.Text isNotUpper={isNotUpper} textColor={textColor} textStyles={textStyles}>
        {buttonText}
      </Styled.Text>
    </Styled.Button>
  );
};
