import { TIconNames } from '@components/icon/icon.typings';

import { TStyles } from '@typings/common';

import { TColorIcon } from '@theme/colors';

export type IBackButtonProps = {
  width: number;
  height: number;
  color?: TColorIcon;
  cssButton?: TStyles;
  iconType?: TIconNames;
};
