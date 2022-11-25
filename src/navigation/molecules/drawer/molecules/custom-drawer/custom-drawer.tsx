import React from 'react';
import { Linking } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { Icon } from '@components/atoms/icon';

import { IMAGES } from '@constants/images';

import { StyledCustomDrawer as Styled } from './custom-drawer.styles';

export const customDrawer = (signOut: () => void) => (props: DrawerContentComponentProps) => {
  const onPressTerms = () => {
    Linking.openURL('https://www.natureonetwenty.com/app-terms-of-service');
  };

  const onPressPrivicy = () => {
    Linking.openURL('https://www.natureonetwenty.com/privacy');
  };

  const onPressInstagram = () => {
    Linking.openURL('https://www.instagram.com/nature120.app/');
  };

  return (
    <Styled.Wrapper>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <Styled.InstagramBtn onPress={onPressInstagram}>
          <Styled.InstagramImage source={IMAGES.instagram} />
          <Styled.InstagramText>Instagram</Styled.InstagramText>
        </Styled.InstagramBtn>
      </DrawerContentScrollView>
      <Styled.Logout onPress={signOut}>
        <Icon type="logout" size={24} />
        <Styled.LogoutText>Log Out</Styled.LogoutText>
      </Styled.Logout>
      <Styled.AdditinallyInfoWrapper>
        <Styled.AdditinallyInfoBtn onPress={onPressTerms}>
          <Styled.AdditinallyInfoText>Terms</Styled.AdditinallyInfoText>
        </Styled.AdditinallyInfoBtn>
        <Styled.AdditinallyInfoBtn onPress={onPressPrivicy}>
          <Styled.AdditinallyInfoText>Privacy</Styled.AdditinallyInfoText>
        </Styled.AdditinallyInfoBtn>
      </Styled.AdditinallyInfoWrapper>
    </Styled.Wrapper>
  );
};
