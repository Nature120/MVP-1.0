import React from 'react';

import { Button } from '@components/button';
import { useNavigation } from '@react-navigation/native';
import { handleNavigate } from '@services/helpers/handle-navigate';
import { StyledButtonOnboarding as Styled } from './button-onboarding.styles';
import { IButtonOnboardingProps } from './button-onboarding.typings';

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
