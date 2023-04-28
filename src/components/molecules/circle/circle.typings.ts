import { Value } from 'react-native-reanimated';

import { IRing } from '@components/organisms/rings/rings.typings';

export interface ICircleProps {
  ring: IRing;
  progress: Value<number>;
}
