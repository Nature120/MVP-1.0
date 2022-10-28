import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { Icon } from '@components/atoms/icon';

import { StyledCustomDrawer as Styled } from './custom-drawer.styles';

export const customDrawer = (signOut: () => void) => (props: DrawerContentComponentProps) =>
  (
    <Styled.Wrapper>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Styled.Logout onPress={signOut}>
        <Icon type="logout" size={24} />
        <Styled.LogoutText>Log Out</Styled.LogoutText>
      </Styled.Logout>
    </Styled.Wrapper>
  );
