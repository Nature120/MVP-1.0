import React from 'react';
import { Text } from 'react-native';

import { StyledTimerStats as Styled } from './timer-stats.styles';

export const TimerStats: React.FC = () => {
  return (
    <Styled.TimerStats>
      <Text>TimerStats</Text>
    </Styled.TimerStats>
  );
};
