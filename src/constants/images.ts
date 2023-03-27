import { Source } from 'react-native-fast-image';

import bell from '@assets/images/bell.png';
import chartLine from '@assets/images/chart-line.png';
import ellipseGreen from '@assets/images/ellipse-green.png';
import ellipseLightGreen from '@assets/images/ellipse-light-green.png';
import grayGreenBgGradient from '@assets/images/gray-green-bg-gradient.jpg';
import handWithPlant from '@assets/images/hand-with-plant.jpg';
import closedEye from '@assets/images/icon/closed-eye.png';
import loader from '@assets/images/loader/loader.jpg';
import logo from '@assets/images/logo.png';
import mask from '@assets/images/mask.png';
import onBoardStart from '@assets/images/on-board/on-board-start.jpg';
import sun_palyer from '@assets/images/player/sun.png';
import clouds from '@assets/images/splash/clouds.png';
import ellipses from '@assets/images/splash/ellipses.png';
import flowers from '@assets/images/splash/flowers.png';
import lotus from '@assets/images/splash/lotus.png';
import tip from '@assets/images/splash/tip.png';
import teachers from '@assets/images/teachers.png';
import wave from '@assets/images/wave.png';

export const IMAGES = {
  flowers,
  tip,
  chartLine,
  wave,
  mask,
  lotus,
  clouds,
  ellipses,
  onBoardStart,
  logo,
  closedEye,
  ['ellipse-green']: ellipseGreen,
  ['ellipse-light-green']: ellipseLightGreen,
  loader,
  sun_palyer,
  grayGreenBgGradient,
  handWithPlant,
  bell,
  teachers,
};

export const URI = {
  mask: 'https://i.postimg.cc/tgdfTsKz/mask.png',
};

export const IMAGES_TO_PRELOAD: Source[] = [{ uri: URI.mask, priority: 'high', cache: 'cacheOnly' }];

export type TImageNames = keyof typeof IMAGES;
