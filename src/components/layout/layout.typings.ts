import { IGradientProps } from '@components/gradient/gradient.typings';

import { TColorBackground } from '@theme/colors';

export interface ILayoutProps extends IGradientProps, IStyledLayoutProps {
  ellipseColor?: 'light-green' | 'green';
  isWithGradient?: boolean;
  isWithScroll?: boolean;
  isScrollVisible?: boolean;
}

export interface IStyledLayoutProps extends IElasticScrollViewProps {
  bgColor?: TColorBackground;
  isWithoutMargin?: boolean;
}

export interface IElasticScrollViewProps {
  elasticScrollColor?: string;
  elasticScrollPosition?: 'top' | 'bottom';
}
