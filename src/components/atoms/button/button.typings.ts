import { GestureResponderEvent } from 'react-native';

import { TStyles } from '@typings/common';

import { TColorFont } from '@theme/colors';

export interface IButtonProps extends IStyledButtonTextProps {
  onPress?: (event: GestureResponderEvent) => void;
  isDisabled?: boolean;
  height?: number;
  buttonColor?: 'green' | 'blue' | 'red';
  activeOpacity?: number;
  styles?: TStyles;
  buttonText?: string;
  isWithShadow?: boolean;
}

export interface IStyledButtonTextProps {
  textColor?: TColorFont;
  textStyles?: TStyles;
  isNotUpper?: boolean;
}
