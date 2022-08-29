import { KeyboardType, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { FlattenInterpolation } from 'styled-components';
import { ThemeProps } from 'styled-components/native';

export interface IProp {
  placeHolder?: string;
  placeHolderTextColor?: string;
  value: string;
  keyboardType?: KeyboardType;
  handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  handleChange: (text: string) => void;
  cssInput?: FlattenInterpolation<ThemeProps<any>>;
}
