import { GestureResponderEvent } from 'react-native';

import { TColorFont } from '@theme/colors';
import { TStyles } from '@typings/common';

export interface IButtonProps extends IStyledButtonTextProps {
  onPress?: (event: GestureResponderEvent) => void;
  isDisabled?: boolean;
  height?: number;
  buttonColor?: 'green' | 'blue';
  activeOpacity?: number;
  styles?: TStyles;
  buttonText?: string;
}

export interface IStyledButtonTextProps {
  textColor?: TColorFont;
  textStyles?: TStyles;
  isNotUpper?: boolean;
}
