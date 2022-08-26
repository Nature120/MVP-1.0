import { IGradientProps } from '@components/gradient/gradient.typings';
import { TColorBackground } from '@theme/colors';

export interface ILayoutProps extends IGradientProps, IStyledLayoutProps {
  ellipseColor?: 'light-green' | 'green';
  isWithGradient?: boolean;
  isWithScroll?: boolean;
}

export interface IStyledLayoutProps {
  bgColor?: TColorBackground;
  isWithoutMargin?: boolean;
}
