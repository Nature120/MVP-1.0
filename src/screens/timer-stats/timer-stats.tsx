import React from 'react';

import { Image } from '@components/atoms/image';

import { DEVICE_HEIGHT, DEVICE_WIDTH } from '@services/helpers/device-utils';

import { StyledTimerStats as Styled } from './timer-stats.styles';

export const TimerStats: React.FC = () => {
  return (
    <Styled.TimerStats>
      <Image
        source={{ uri: 'https://i.postimg.cc/Kzpx6Qby/Splash-Screen-00.png' }}
        height={DEVICE_HEIGHT}
        width={DEVICE_WIDTH}
        styles={{ top: -50 }}
      />
    </Styled.TimerStats>
  );
};
