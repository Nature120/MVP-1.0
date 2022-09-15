import { Easing } from 'react-native';
import { Easing as AnimatedEasing } from 'react-native-reanimated';

import { IRing } from './rings.typings';

export const { PI } = Math;
export const TAU = 2 * PI;
export const RINGS_SIZE = 230;
export const STROKE_WIDTH = 15;
export const CX = RINGS_SIZE / 2;
export const CY = RINGS_SIZE / 2;
export const ANIMATION_DURATION = 1500;
export const TEXT_EASING = Easing.out(Easing.ease);
export const RING_EASING = AnimatedEasing.out(AnimatedEasing.ease);

const getTheta = (percent: number) => (percent / 100) * TAU;

export const innerCircle = (percent: number): IRing => ({
  end: '#FF8C78',
  start: '#E9FF5E',
  bg: '#FAFAD2',
  theta: getTheta(percent),
  size: RINGS_SIZE - STROKE_WIDTH * 2,
});

export const outerCircle = (percent: number): IRing => ({
  start: '#0CA152',
  end: '#0CA152',
  bg: '#D1EBE0',
  theta: getTheta(percent),
  size: RINGS_SIZE,
});

export const getFgRadius = (percent: number) => {
  if (percent > 100) {
    return innerCircle(percent).size / 2 - STROKE_WIDTH;
  }
  return outerCircle(percent).size / 2 - STROKE_WIDTH;
};

export const getRings = (percent: number) => {
  if (percent > 100) {
    const innerPercent = percent - 100;
    return [outerCircle(100), innerCircle(innerPercent)];
  }
  return [outerCircle(percent)];
};
