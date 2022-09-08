import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';

import { signOut } from '@services/store/auth/auth.actions';

export const Home = () => {
  const dispatch = useDispatch();

  const onPressSignOut = () => {
    dispatch(signOut(null));
    console.log('sign out success');
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          auth()
            .signOut()
            .then(onPressSignOut)
            .catch(error => console.log('error', error))
        }>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
