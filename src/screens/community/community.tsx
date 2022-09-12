import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { useSignOut } from '@services/hooks/sign-out';

import { StyledCommunity as Styled } from './community.styles';

export const Community: React.FC = () => {
  const { onSignOut } = useSignOut();

  return (
    <Styled.Community>
      <Text>Community</Text>
      <TouchableOpacity onPress={onSignOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </Styled.Community>
  );
};
