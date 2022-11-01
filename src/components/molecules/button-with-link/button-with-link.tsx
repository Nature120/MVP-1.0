import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/atoms/button';

import { handleNavigate } from '@services/helpers/handle-navigate';

import { IButtonWithLinkProps } from './button-with-link.typings';

import { StyledButtonWithLink as Styled } from './button-with-link.styles';

export const ButtonWithLink: React.FC<IButtonWithLinkProps> = props => {
  const {
    bottomText,
    onTextPressNavigateTo,
    routeText,
    isWithMagrin,
    onButtonPressNavigateTo,
    onTextPress,
    marginBottom,
    ...buttonProps
  } = props;
  const { navigate } = useNavigation();

  const onPressUpperButton = () => {
    return onButtonPressNavigateTo ? handleNavigate(navigate, onButtonPressNavigateTo) : buttonProps.onPress;
  };

  const onPressBottomButton = () => {
    return onTextPressNavigateTo ? handleNavigate(navigate, onTextPressNavigateTo) : onTextPress;
  };

  return (
    <Styled.ButtonWithLink isWithMagrin={isWithMagrin} marginBottom={marginBottom}>
      <Button {...buttonProps} onPress={onPressUpperButton()} />

      <Styled.SubButton>
        {bottomText && <Styled.SubButtonText>{bottomText}</Styled.SubButtonText>}

        <TouchableOpacity onPress={onPressBottomButton()} hitSlop={{ top: 10, bottom: 10, left: 15, right: 15 }}>
          <Styled.TouchableText isBottomText={!!bottomText}>{routeText}</Styled.TouchableText>
        </TouchableOpacity>
      </Styled.SubButton>
    </Styled.ButtonWithLink>
  );
};
