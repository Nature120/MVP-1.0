import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { transformOrigin } from 'react-native-redash';

import { TAnimatedNumber, TAnimatedViewProps, TViewProps } from '@typings/common';

export const StyledCircularProgress = {
  LeftSemicircle: {
    zIndex: 1,
  } as TViewProps,

  RotateView: {
    transform: [{ rotate: '180deg' }],
  } as TViewProps,

  LeftAnimatedSemicircle: (
    opacity: Animated.Node<0 | 1>,
    radius: number,
    theta: TAnimatedNumber,
  ): TAnimatedViewProps => ({
    ...StyleSheet.absoluteFillObject,
    transform: transformOrigin({ x: 0, y: radius / 2 }, { rotate: theta }),
    opacity,
  }),

  RightAnimatedSemicircle: (rotate: TAnimatedNumber, radius: number): TAnimatedViewProps => ({
    ...StyleSheet.absoluteFillObject,
    transform: transformOrigin({ x: 0, y: radius / 2 }, { rotate }),
  }),
};
