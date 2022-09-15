import { Animated } from 'react-native';
import { Circle } from 'react-native-svg';
import styled from 'styled-components/native';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const CircleSvgStyles = {
  Circle: styled(AnimatedCircle)`
    color: red;
    shadow-radius: 5;
    elevation: 8;
    shadow-color: black;
    shadow-opacity: 0.3;
    shadow-offset: {
      width: 2,
      height: 2
    },
  `,
};
