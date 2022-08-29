import React from 'react';
import { scale, verticalScale } from 'react-native-size-matters';

import { Icon } from '@components/icon';
import { IProp } from './social-auth-button.types';

import { SocialAuthButtonStyles as Styled } from './social-auth-button.styles';

export const SocialAuthButton: React.FC<IProp> = ({ labelText, icon }) => {
  return (
    <Styled.ButtonWrapper>
      <Icon type={icon} width={scale(25)} height={verticalScale(25)} styles={Styled.Icon} />
      <Styled.Text>Continue with {labelText}</Styled.Text>
    </Styled.ButtonWrapper>
  );
};
