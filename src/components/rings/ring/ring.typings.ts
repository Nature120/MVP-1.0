import Animated from 'react-native-reanimated';

import { IRing } from '../rings.typings';

export interface IRingProps {
  ring: IRing;
  theta: Animated.Node<number>;
}
