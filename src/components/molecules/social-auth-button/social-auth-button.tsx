import React from 'react';
import { scale, verticalScale } from 'react-native-size-matters';

import { Icon } from '@components/atoms/icon';

import { IProp } from './social-auth-button.typings';

import { SocialAuthButtonStyles as Styled } from './social-auth-button.styles';

export const SocialAuthButton: React.FC<IProp> = ({ labelText, icon, handleAuth, fill }) => {
  return (
    <Styled.ButtonWrapper onPress={handleAuth}>
      <Icon type={icon} width={scale(30)} height={verticalScale(25)} styles={Styled.Icon} colorIcon={fill} />
      <Styled.Text>{labelText === 'Apple' ? 'Sign In with Apple' : `Continue with ${labelText}`}</Styled.Text>
    </Styled.ButtonWrapper>
  );
};
