import { KeyboardType, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

import { TStyles } from '@typings/common';

import { TColorFont } from '@theme/colors';

export interface IProp {
  placeHolder?: string;
  placeHolderTextColor?: TColorFont;
  value: string;
  keyboardType?: KeyboardType;
  handleBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  handleChange: (text: string) => void;
  onFocus?: () => void;
  cssInput?: TStyles;
}
