import ellipseGreen from '@assets/images/ellipse-green.png';
import ellipseLightGreen from '@assets/images/ellipse-light-green.png';
import clouds from '@assets/images/splash/clouds.png';
import ellipses from '@assets/images/splash/ellipses.png';
import flowers from '@assets/images/splash/flowers.png';
import lotus from '@assets/images/splash/lotus.png';
import tip from '@assets/images/splash/tip.png';

export const IMAGES = {
  flowers,
  tip,
  lotus,
  clouds,
  ellipses,
  ['ellipse-green']: ellipseGreen,
  ['ellipse-light-green']: ellipseLightGreen,
};

export type TImageNames = keyof typeof IMAGES;
