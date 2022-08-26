import flowers from '@assets/images/splash/flowers.png';
import tip from '@assets/images/splash/tip.png';
import lotus from '@assets/images/splash/lotus.png';
import clouds from '@assets/images/splash/clouds.png';

export const IMAGES = {
  flowers,
  tip,
  lotus,
  clouds,
};

export type TImageNames = keyof typeof IMAGES;
