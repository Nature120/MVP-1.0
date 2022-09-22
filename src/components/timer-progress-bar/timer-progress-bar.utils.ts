import { moderateScale } from 'react-native-size-matters';

import { STROKE_WIDTH } from './ring/ring.constants';
import { TAU } from './timer-progress-bar.constants';

import { COLOR } from '@theme/colors';

export const getTheta = (percent: number) => (percent / 100) * TAU;

export const outerCircle = (percent: number) => ({
  start: `${COLOR.primary.lightGreen}`,
  end: `${COLOR.primary.lightGreen}`,
  bg: `${COLOR.background.progressBar}`,
  theta: getTheta(percent),
  size: moderateScale(250),
});

export const getFgRadius = (percent: number) => {
  return outerCircle(percent).size / 2 - STROKE_WIDTH;
};
