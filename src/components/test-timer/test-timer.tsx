import React, { useState } from 'react';
import { PixelRatio, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { lessThan, max, min, multiply, sub, Value } from 'react-native-reanimated';
import { interpolateColor } from 'react-native-redash';
import { scale, verticalScale } from 'react-native-size-matters';

import { Icon } from '@components/icon';
import { Ring } from './ring/ring';
import { useRings } from './ring/ring.state';

import { StyledRing as Styled } from './test-timer.styles';

export const TAU = 2 * Math.PI;

export const TimerTest = () => {
  const { ring, progress, fgRadius, isActive, seconds, setIsActive } = useRings({ maxSeconds: 100 });
  // const ring = { start: '#27d98f', end: '#d9651c', bg: '#F0F7F7', theta: 1 * TAU, size: 230 };

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Styled.Wrapper>
      <Styled.Overlay style={{ ...StyleSheet.absoluteFillObject }}>
        <Ring theta={multiply(ring.theta, progress)} ring={ring} />
      </Styled.Overlay>

      <Styled.Wrapper>
        <Styled.TextNumber>{seconds}</Styled.TextNumber>
        <TouchableOpacity onPress={toggle}>
          <Styled.IconWrapper>
            {isActive ? (
              <Icon type="pause" width={scale(33)} height={verticalScale(36)} />
            ) : (
              <Icon type="play" width={scale(33)} height={verticalScale(36)} />
            )}
          </Styled.IconWrapper>
        </TouchableOpacity>
      </Styled.Wrapper>

      <Styled.Overlay style={{ ...StyleSheet.absoluteFillObject }}>
        <Styled.Foreground fgRadius={fgRadius} />
      </Styled.Overlay>
    </Styled.Wrapper>
  );
};
