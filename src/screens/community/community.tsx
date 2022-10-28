import React from 'react';

import { Image } from '@components/atoms/image';

import { DEVICE_HEIGHT, DEVICE_WIDTH } from '@services/helpers/device-utils';

import { StyledCommunity as Styled } from './community.styles';

export const Community: React.FC = () => {
  return (
    <Styled.Community>
      <Image
        source={{ uri: 'https://i.postimg.cc/Kzpx6Qby/Splash-Screen-00.png' }}
        height={DEVICE_HEIGHT}
        width={DEVICE_WIDTH}
        styles={{ top: -50 }}
      />
    </Styled.Community>
  );
};
