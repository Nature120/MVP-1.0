import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

import { useAppDispatch } from '@services/hooks/useRedux';
import { signOut } from '@services/store/auth/auth.actions';

import { StyledCommunity as Styled } from './community.styles';

export const Community: React.FC = () => {
  const dispatch = useAppDispatch();

  const onPressSignOut = () => {
    dispatch(signOut(null));
    console.log('sign out success');
  };
  return (
    <Styled.Community>
      <Text>Community</Text>
      <TouchableOpacity
        onPress={() =>
          auth()
            .signOut()
            .then(onPressSignOut)
            .catch(error => console.log('error', error))
        }>
        <Text>Logout</Text>
      </TouchableOpacity>
    </Styled.Community>
  );
};
