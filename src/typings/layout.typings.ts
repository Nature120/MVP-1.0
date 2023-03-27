import { NativeScrollEvent } from 'react-native';
import { FlattenSimpleInterpolation } from 'styled-components';

export interface ILayoutProps {
  children: React.ReactNode;
  cssStyles?: FlattenSimpleInterpolation;
  handleScroll?: ({ layoutMeasurement, contentOffset, contentSize }: NativeScrollEvent) => void;
}
