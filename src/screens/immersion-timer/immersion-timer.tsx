import React from 'react';
import { Text } from 'react-native';

import { StyledImmersionTimer as Styled } from './immersion-timer.styles';

export const ImmersionTimer: React.FC = () => {
  return (
    <Styled.ImmersionTimer>
      <Text>ImmersionTimer</Text>
    </Styled.ImmersionTimer>
  );
};
