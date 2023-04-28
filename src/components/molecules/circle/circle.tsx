import React from 'react';
import { StyleSheet } from 'react-native';
import { multiply } from 'react-native-reanimated';

import { Ring } from '@components/molecules/ring';

import { ICircleProps } from './circle.typings';

import { StyledCircle as Styled } from './circle.styles';

export const Circle: React.FC<ICircleProps> = ({ ring, progress }) => {
  return (
    <Styled.Overlay style={{ ...StyleSheet.absoluteFillObject }}>
      <Ring theta={multiply(ring.theta, progress)} ring={ring} />
    </Styled.Overlay>
  );
};
