import React from 'react';
import { View } from 'react-native';
import Animated, { Extrapolate, interpolate, lessThan } from 'react-native-reanimated';

import { HalfCircle } from '../half-circle';

import { PI } from '../rings.constants';

import { ICircularProgressProps } from './circular-progress.typings';

import { StyledCircularProgress as Styled } from './circular-progress.styles';

export const CircularProgress: React.FC<ICircularProgressProps> = props => {
  const { theta, bg, fg, radius } = props;

  const opacity = lessThan(theta, PI);

  const rotate = interpolate(theta, {
    inputRange: [PI, 2 * PI],
    outputRange: [0, PI],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <>
      <View style={Styled.LeftSemicircle}>
        <HalfCircle radius={radius}>
          <View style={Styled.RotateView}>{fg}</View>
        </HalfCircle>

        <Animated.View style={Styled.LeftAnimatedSemicircle(opacity, radius, theta)}>
          <HalfCircle radius={radius}>{bg}</HalfCircle>
        </Animated.View>
      </View>

      <View style={Styled.RotateView}>
        <HalfCircle radius={radius}>{fg}</HalfCircle>
        <Animated.View style={Styled.RightAnimatedSemicircle(rotate, radius)}>
          <HalfCircle radius={radius}>{bg}</HalfCircle>
        </Animated.View>
      </View>
    </>
  );
};
