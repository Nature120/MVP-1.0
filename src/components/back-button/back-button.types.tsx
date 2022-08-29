import { FlattenInterpolation, ThemeProps } from 'styled-components';

import { TIconNames } from '@components/icon/icon.typings';

import { TColorIcon } from '@theme/colors';

export type IProp = {
  type: TIconNames;
  width: number;
  height: number;
  color: TColorIcon;
  cssContainer: FlattenInterpolation<ThemeProps<any>>;
  cssButton: FlattenInterpolation<ThemeProps<any>>;
};
