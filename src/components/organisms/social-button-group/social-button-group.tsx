import React from 'react';

import { SocialAuthButton } from '@components/molecules/social-auth-button/social-auth-button';

import { SocialButtonGroupStyles as Styled } from './social-button-group.styles';

interface IProp {
  onGoogleButtonPress: () => Promise<void>;
  onFacebookButtonPress: () => Promise<void>;
  onAppleButtonPress: () => Promise<void>;
}

export const SocialButtonGroup: React.FC<IProp> = ({
  onGoogleButtonPress,
  onFacebookButtonPress,
  onAppleButtonPress,
}) => {
  return (
    <>
      <Styled.GoogleButtonWrapper>
        <SocialAuthButton icon="google" labelText="Google" handleAuth={onGoogleButtonPress} />
      </Styled.GoogleButtonWrapper>
      <Styled.FaceBookButtonWrapper>
        <SocialAuthButton icon="facebook" labelText="Facebook" handleAuth={onFacebookButtonPress} />
      </Styled.FaceBookButtonWrapper>
      <Styled.AppleButtonWrapper>
        <SocialAuthButton icon="apple" labelText="Apple" handleAuth={onAppleButtonPress} fill={'darkBlue'} />
      </Styled.AppleButtonWrapper>
    </>
  );
};
