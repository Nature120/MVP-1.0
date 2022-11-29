import React from 'react';
import { Alert, Linking } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { Icon } from '@components/atoms/icon';

import { IMAGES } from '@constants/images';
import { INSTAGRAM, PRIVACY, TERMS } from '@constants/social-url';

import { StyledCustomDrawer as Styled } from './custom-drawer.styles';

export const customDrawer = (signOut: () => void) => (props: DrawerContentComponentProps) => {
  const onPressLink = async (link: string) => {
    const supported = await Linking.canOpenURL(link);
    if (supported) {
      await Linking.openURL(link);
    } else {
      Alert.alert(`Don't know how to open this URL ${link}`);
    }
  };

  return (
    <Styled.Wrapper>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <Styled.InstagramBtn onPress={() => onPressLink(INSTAGRAM)}>
          <Styled.InstagramImage source={IMAGES.instagram} />
          <Styled.InstagramText>Instagram</Styled.InstagramText>
        </Styled.InstagramBtn>
        <Styled.AdditinallyInfoBtn onPress={() => onPressLink(TERMS)} title="terms">
          <Styled.AdditinallyInfoText>Terms</Styled.AdditinallyInfoText>
        </Styled.AdditinallyInfoBtn>
        <Styled.AdditinallyInfoBtn onPress={() => onPressLink(PRIVACY)}>
          <Styled.AdditinallyInfoText>Privacy</Styled.AdditinallyInfoText>
        </Styled.AdditinallyInfoBtn>
      </DrawerContentScrollView>
      <Styled.Logout onPress={signOut}>
        <Icon type="logout" size={24} />
        <Styled.LogoutText>Log Out</Styled.LogoutText>
      </Styled.Logout>
    </Styled.Wrapper>
  );
};
