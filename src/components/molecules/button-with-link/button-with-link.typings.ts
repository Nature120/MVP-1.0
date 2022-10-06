import { GestureResponderEvent } from 'react-native';

import { IButtonProps } from '@components/atoms/button/button.typings';

export interface IButtonWithLinkProps extends IButtonProps, IStyledButtonWithLinkProps {
  bottomText?: string;
  routeText: string;
  onTextPressNavigateTo?: string;
  onButtonPressNavigateTo?: string;
  onTextPress?: (event: GestureResponderEvent) => void;
  isFirstLaunch?: boolean;
}

export interface IStyledButtonWithLinkProps {
  isWithMagrin?: boolean;
  marginBottom?: number;
}
