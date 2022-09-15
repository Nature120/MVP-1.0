import { ColorValue, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { TAnimatedNumber, TAnimatedViewProps, TViewProps } from '@typings/common';

const STROKE_WIDTH = 15;

const commonStyles: TViewProps = {
  ...StyleSheet.absoluteFillObject,
  width: STROKE_WIDTH,
  height: STROKE_WIDTH,
  borderRadius: STROKE_WIDTH / 2,
};

export const StyledRing = {
  BackgroundView: (backgroundColor: string): TViewProps => ({
    backgroundColor,
    flex: 1,
  }),

  RotateView: (rotate: TAnimatedNumber): TAnimatedViewProps => ({
    transform: [{ rotate }],
  }),

  StartProgress: (opacity: Animated.Node<0 | 1>, radius: number, backgroundColor: string): TAnimatedViewProps => [
    commonStyles,
    {
      opacity,
      backgroundColor,
      top: radius - STROKE_WIDTH / 2,
    },
  ],

  //TODO refactor after shadow approve
  ShadowEndProgress: (radius: number, theta: TAnimatedNumber): TAnimatedViewProps => [
    commonStyles,
    {
      top: radius - STROKE_WIDTH / 2,
      transform: [
        { translateX: radius - STROKE_WIDTH / 2 },
        { rotate: theta },
        { translateX: -(radius - STROKE_WIDTH / 2) },
        { translateY: -7 },
      ],
    },
  ],
  EndProgress: (radius: number, theta: TAnimatedNumber, bgColor: TAnimatedNumber): TAnimatedViewProps => [
    commonStyles,
    {
      backgroundColor: bgColor as unknown as ColorValue,
      top: radius - STROKE_WIDTH / 2,
      transform: [
        { translateX: radius - STROKE_WIDTH / 2 },
        { rotate: theta },
        { translateX: -(radius - STROKE_WIDTH / 2) },
      ],
    },
  ],
};
