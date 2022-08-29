import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Button } from '@components/button';
import { useNavigation } from '@react-navigation/native';
import { handleNavigate } from '@services/helpers/handle-navigate';
import { StyledButtonWithLink as Styled } from './button-with-link.styles';
import { IButtonWithLinkProps } from './button-with-link.typings';

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

  return (
    <Styled.ButtonWithLink
      isWithMagrin={isWithMagrin}
      marginBottom={marginBottom}>
      <Button
        {...buttonProps}
        onPress={
          onButtonPressNavigateTo
            ? handleNavigate(navigate, onButtonPressNavigateTo)
            : buttonProps.onPress
        }
      />

      <Styled.SubButton>
        {bottomText && (
          <Styled.SubButtonText>{bottomText}</Styled.SubButtonText>
        )}

        <TouchableOpacity
          onPress={
            onTextPressNavigateTo
              ? handleNavigate(navigate, onTextPressNavigateTo)
              : onTextPress
          }>
          <Styled.TouchableText>{routeText}</Styled.TouchableText>
        </TouchableOpacity>
      </Styled.SubButton>
    </Styled.ButtonWithLink>
  );
};
