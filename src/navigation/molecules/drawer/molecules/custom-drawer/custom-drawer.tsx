import React from 'react';
import { TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { Icon } from '@components/atoms/icon';

import { onPressLink } from '@services/helpers/utils';

import { INSTAGRAM, PRIVACY, TERMS } from '@constants/social-url';

import { StyledCustomDrawer as Styled } from './custom-drawer.styles';

export const customDrawer = (signOut: () => void) => (props: DrawerContentComponentProps) => {
  return (
    <Styled.Wrapper>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <Styled.InstagramBtn onPress={() => onPressLink(INSTAGRAM)}>
          <Icon type="instagram" size={28} colorIcon="green" />
          <Styled.InstagramText>Instagram</Styled.InstagramText>
        </Styled.InstagramBtn>
      </DrawerContentScrollView>
      <Styled.Logout onPress={signOut}>
        <Icon type="logout" size={24} colorIcon="green" />
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
