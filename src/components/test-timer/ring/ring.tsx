import React from 'react';
import { PixelRatio, StyleSheet, Text, View } from 'react-native';
import Animated, { lessThan, max, min, sub } from 'react-native-reanimated';
import { interpolateColor } from 'react-native-redash';

import { CircularProgress } from '@components/rings/circular-progress';
import { RingShadow } from '@components/rings/ring-shadow';
import { RingsGradient } from '@components/rings/rings-gradient';
import { TAU } from '../test-timer';

import { StyledRing as Styled } from './ring.styles';

export const Ring = ({ theta, ring }: any) => {
  const radius = PixelRatio.roundToNearestPixel(ring.size / 2);
  const rotate = max(0, sub(theta, TAU));
  const opacity = lessThan(theta, TAU);

  const backgroundColor = interpolateColor(theta, {
    inputRange: [0, TAU],
    outputRange: [ring.start, ring.end],
  });

  return (
    <View>
      <Animated.View style={Styled.RotateView(rotate)}>
        <CircularProgress
          radius={radius}
          theta={min(theta, TAU)}
          fg={<RingsGradient colors={[ring.start, ring.end]} size={ring.size} />}
          bg={<View style={Styled.BackgroundView(ring.bg)} />}
        />
      </Animated.View>

      <Animated.View style={Styled.StartProgress(opacity, radius, ring.start)} />

      <Animated.View style={Styled.ShadowEndProgress(radius, theta)}>
        <RingShadow />
      </Animated.View>

      <Animated.View style={Styled.EndProgress(radius, theta, backgroundColor)} />
    </View>
  );
};
