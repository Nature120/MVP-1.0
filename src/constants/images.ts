import { Source } from 'react-native-fast-image';

import ellipseGreen from '@assets/images/ellipse-green.png';
import ellipseLightGreen from '@assets/images/ellipse-light-green.png';
import logo from '@assets/images/logo.png';
import mask from '@assets/images/mask.png';
import onBoardStart from '@assets/images/on-board/on-board-start.jpg';
import clouds from '@assets/images/splash/clouds.png';
import ellipses from '@assets/images/splash/ellipses.png';
import flowers from '@assets/images/splash/flowers.png';
import lotus from '@assets/images/splash/lotus.png';
import tip from '@assets/images/splash/tip.png';
import wave from '@assets/images/wave.png';

export const IMAGES = {
  flowers,
  tip,
  wave,
  mask,
  lotus,
  clouds,
  ellipses,
  onBoardStart,
  logo,
  ['ellipse-green']: ellipseGreen,
  ['ellipse-light-green']: ellipseLightGreen,
};

export const URI = {
  mask: 'https://i.postimg.cc/tgdfTsKz/mask.png',
};

export const IMAGES_TO_PRELOAD: Source[] = [{ uri: URI.mask, priority: 'high', cache: 'cacheOnly' }];

export type TImageNames = keyof typeof IMAGES;
