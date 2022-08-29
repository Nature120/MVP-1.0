import { KeyboardType, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

import { TStyles } from '@typings/common';

export interface IProp {
  placeHolder?: string;
  placeHolderTextColor?: string;
  value: string;
  keyboardType?: KeyboardType;
  handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  handleChange: (text: string) => void;
  cssInput?: TStyles;
}
