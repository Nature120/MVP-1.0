import React from 'react';
import { View } from 'react-native';

import { SocialAuthButton } from '@components/molecules/social-auth-button/social-auth-button';

import { isIOS } from '@services/helpers/device-utils';

import { SocialButtonGroupStyles as Styled } from './social-button-group.styles';

interface IProp {
  onGoogleButtonPress: () => void;
  onFacebookButtonPress: () => void;
  onAppleButtonPress: () => void;
  nameOfScreen: 'authorization' | 'settings';
}

export const SocialButtonGroup: React.FC<IProp> = ({
  onGoogleButtonPress,
  onFacebookButtonPress,
  onAppleButtonPress,
  nameOfScreen,
}) => {
  return (
    <View>
      {isIOS && (
        <Styled.AppleButtonWrapper>
          <SocialAuthButton
            icon="apple"
            labelText="Apple"
            nameOfScreen={nameOfScreen}
            handleAuth={onAppleButtonPress}
            fill={'darkBlue'}
          />
        </Styled.AppleButtonWrapper>
      )}
      <Styled.GoogleButtonWrapper>
        <SocialAuthButton
          icon="google"
          nameOfScreen={nameOfScreen}
          labelText="Google"
          handleAuth={onGoogleButtonPress}
        />
      </Styled.GoogleButtonWrapper>
      <Styled.FaceBookButtonWrapper>
        <SocialAuthButton
          icon="facebook"
          nameOfScreen={nameOfScreen}
          labelText="Facebook"
          handleAuth={onFacebookButtonPress}
        />
      </Styled.FaceBookButtonWrapper>
    </View>
  );
};
