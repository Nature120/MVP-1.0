import React from 'react';
import { Animated, View } from 'react-native';
import Svg, { Circle, Defs, G, LinearGradient, Path, RadialGradient, Stop } from 'react-native-svg';

import { CircleSvgStyles as Styled } from './circle-svg.styles';

import { COLOR } from '@theme/colors';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedCircleShadow = Animated.createAnimatedComponent(Circle);
const SecondAnimatedCircle = Animated.createAnimatedComponent(Circle);

interface IProp {
  halfCircle: number;
  strokeWidth: number;
  radius: number;
  circumference: number;
  circleRef: any;
  shadowCircleRef: any;
  isFinished: any;
  secondCircleRef: any;
}

export const CircleSvg: React.FC<IProp> = ({
  halfCircle,
  strokeWidth,
  radius,
  circleRef,
  circumference,
  shadowCircleRef,
  isFinished,
  secondCircleRef,
}) => {
  const isFirst = true;
  return (
    <>
      <Svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={COLOR.background.progressBar}
            strokeWidth={strokeWidth}
            r={radius}
            strokeOpacity={1}
            fill="transparent"
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={COLOR.primary.lightGreen}
            strokeWidth={strokeWidth}
            r={radius}
            strokeOpacity={1}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            strokeLinejoin={'round'}
          />
          <AnimatedCircleShadow
            ref={shadowCircleRef}
            cx="50%"
            cy="50%"
            stroke={COLOR.primary.dark}
            strokeWidth={strokeWidth}
            r={radius}
            strokeOpacity={1}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            strokeLinejoin={'round'}
          />
          <SecondAnimatedCircle
            ref={secondCircleRef}
            cx="50%"
            cy="50%"
            stroke={COLOR.primary.lightGreen}
            strokeWidth={strokeWidth}
            r={radius}
            strokeOpacity={1}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            strokeLinejoin={'round'}
          />
        </G>
      </Svg>
    </>
  );
};
