import { GestureResponderEvent } from 'react-native';

import { IButtonProps } from '@components/button/button.typings';

export interface IButtonWithLinkProps extends IButtonProps, IStyledButtonWithLinkProps {
  bottomText?: string;
  routeText: string;
  onTextPressNavigateTo: string;
  onButtonPressNavigateTo?: string;
  onTextPress?: (event: GestureResponderEvent) => void;
}

export interface IStyledButtonWithLinkProps {
  isWithMagrin?: boolean;
  marginBottom?: 24 | 36;
}
