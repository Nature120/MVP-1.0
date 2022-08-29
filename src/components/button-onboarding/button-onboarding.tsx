import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/button';

import { handleNavigate } from '@services/helpers/handle-navigate';

import { IButtonOnboardingProps } from './button-onboarding.typings';

import { StyledButtonOnboarding as Styled } from './button-onboarding.styles';

export const ButtonOnboarding: React.FC<IButtonOnboardingProps> = props => {
  const { onButtonPressNavigateTo, ...buttonProps } = props;
  const { navigate } = useNavigation();

  return (
    <Styled.ButtonOnboarding>
      <Button
        {...buttonProps}
        onPress={onButtonPressNavigateTo ? handleNavigate(navigate, onButtonPressNavigateTo) : buttonProps.onPress}
      />
    </Styled.ButtonOnboarding>
  );
};
