import React from 'react';
import { PixelRatio, View } from 'react-native';
import Animated, { lessThan, max, min, sub } from 'react-native-reanimated';
import { interpolateColor } from 'react-native-redash';

import { CircularProgress } from '../circular-progress';
import { RingShadow } from '../ring-shadow';
import { RingsGradient } from '../rings-gradient';

import { STROKE_WIDTH, TAU } from '../rings.constants';

import { IRingProps } from './ring.typings';

import { StyledRing as Styled } from './ring.styles';

export const Ring: React.FC<IRingProps> = props => {
  const {
    ring: { size, start, end, bg },
    theta,
  } = props;

  const radius = PixelRatio.roundToNearestPixel(size / 2);
  const rotate = max(0, sub(theta, TAU));
  const opacity = lessThan(theta, TAU);

  const backgroundColor = interpolateColor(theta, {
    inputRange: [0, TAU],
    outputRange: [start, end],
  });

  return (
    <View>
      <Animated.View style={Styled.RotateView(rotate)}>
        <CircularProgress
          radius={radius}
          theta={min(theta, TAU)}
          fg={<RingsGradient colors={[start, end]} size={size} />}
          bg={<View style={Styled.BackgroundView(bg)} />}
        />
      </Animated.View>

      <Animated.View style={Styled.StartProgress(opacity, radius, start)} />

      <Animated.View style={Styled.ShadowEndProgress(radius, theta)}>
        <RingShadow strokeWidth={STROKE_WIDTH} />
      </Animated.View>

      <Animated.View style={Styled.EndProgress(radius, theta, backgroundColor)} />
    </View>
  );
};
