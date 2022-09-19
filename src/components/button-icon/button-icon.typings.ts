import { GestureResponderEvent } from 'react-native';

import { IIconProps } from '@components/icon/icon.typings';

export interface IButtonIconProps extends IIconProps {
  onPress: (event: GestureResponderEvent) => void;
  isWithBg?: boolean;
  iconIndent?: number;
}
