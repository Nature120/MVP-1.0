import { Priority, ResizeMode, Source } from 'react-native-fast-image';

import { TStyles } from '@typings/common';

type TCache = 'immutable' | 'web' | 'cacheOnly';

export interface IImageProps extends IStyledImageProps {
  source: Source;
  resizeMode?: ResizeMode;
  priority?: Priority;
  children?: React.ReactNode;
  cache?: TCache;
}

export interface IStyledImageProps {
  width: number;
  height: number;
  borderRadius?: number;
  styles?: TStyles;
}
