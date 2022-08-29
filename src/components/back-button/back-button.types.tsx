import { FlattenInterpolation, ThemeProps } from 'styled-components';

import { TColorIcon } from '@theme/colors';

export type IProp = {
  width: number;
  height: number;
  color: TColorIcon;
  cssContainer: FlattenInterpolation<ThemeProps<any>>;
  cssButton: FlattenInterpolation<ThemeProps<any>>;
};
