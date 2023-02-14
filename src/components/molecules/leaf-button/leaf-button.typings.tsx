import { FlattenSimpleInterpolation } from 'styled-components';

import { IPracticeLibrary } from '@typings/common';

export interface IProp {
  library: IPracticeLibrary;
  cssButton: FlattenSimpleInterpolation;
  width: number;
  height: number;
}
