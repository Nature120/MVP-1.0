import { TextInput } from 'react-native';

export interface IGoalTextProps {
  inputRef: React.RefObject<TextInput>;
  maxMinutes: number;
  minutes: number;
  addedTime?: number;
}
