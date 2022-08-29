import { ICONS } from './icon.constants';

import { TStyles } from '@typings/common';

import { TColorIcon } from '@theme/colors';

export type TIconNames = keyof typeof ICONS;

export interface IIconProps {
  type: TIconNames;
  colorIcon?: TColorIcon;
  size?: number;
  width?: number;
  height?: number;
  styles?: TStyles;
  elevation?: number;
}
