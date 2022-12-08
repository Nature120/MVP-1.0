import React from 'react';
import { Alert, Linking, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { Icon } from '@components/atoms/icon';

import { IMAGES } from '@constants/images';
import { INSTAGRAM, PRIVACY, TERMS } from '@constants/social-url';

import { IError } from '@typings/common';

import { StyledCustomDrawer as Styled } from './custom-drawer.styles';

export const customDrawer = (signOut: () => void) => (props: DrawerContentComponentProps) => {
  const user = auth().currentUser;

  const onPressLink = async (link: string) => {
    const supported = await Linking.canOpenURL(link);
    if (supported) {
      await Linking.openURL(link);
    } else {
      Alert.alert(`Don't know how to open this URL ${link}`);
    }
  };

  // const deleteUser = async () => {
  //   try {
  //     // await user?.delete();
  //   } catch (error) {
  //     const err = error as IError;
  //     // handleError(err.code as string);
  //     console.log('error', err.code);
  //   }

  //   // firestore().collection('Users').doc(user?.uid).delete();
  //   // signOut();
  // };

  // const handleError = (error: string) => {
  //   user?.reauthenticateWithCredential();
  // };

  const onPressDeleteAccount = () => {
    props.navigation.navigate('Delete Account');
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
      <Styled.UserDeleteBtn onPress={onPressDeleteAccount}>
        <Styled.DeleteUserText>Delete your account</Styled.DeleteUserText>
      </Styled.UserDeleteBtn>
    </Styled.Wrapper>
  );
};
