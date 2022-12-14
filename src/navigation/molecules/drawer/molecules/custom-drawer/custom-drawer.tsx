import React from 'react';
import { Alert, Linking, TouchableOpacity } from 'react-native';
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
      </DrawerContentScrollView>
      <Styled.Logout onPress={signOut}>
        <Icon type="logout" size={24} />
        <Styled.LogoutText>Log Out</Styled.LogoutText>
      </Styled.Logout>
      <Styled.AdditinallyInfoWrapper>
        <TouchableOpacity onPress={() => onPressLink(TERMS)}>
          <Styled.AdditinallyInfoText>Terms</Styled.AdditinallyInfoText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressLink(PRIVACY)}>
          <Styled.AdditinallyInfoText>Privacy</Styled.AdditinallyInfoText>
        </TouchableOpacity>
      </Styled.AdditinallyInfoWrapper>
    </Styled.Wrapper>
  );
};
