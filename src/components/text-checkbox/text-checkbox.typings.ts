import { IIconSize, TIconNames } from '@components/icon/icon.typings';

import { TStyles } from '@typings/common';

interface ICommonProps {
  borderRadius?: number;
  styles?: TStyles;
  activeOpacity?: number;
}

export interface ITextCheckboxPropsCustomRender extends ICommonProps {
  name: string;
  onChange: (isChecked: boolean, name: string) => void;
  renderComponent: React.ReactNode;
  icon?: never;
  iconSize?: never;
  text?: never;
}

export interface ITextCheckboxPropsDefault extends ITextCheckBox, ICommonProps {
  name?: string;
  onChange?: (isChecked: boolean, name?: string) => void;
  renderComponent?: never;
}

export interface ITextCheckBox {
  icon?: TIconNames;
  iconSize?: IIconSize;
  text: string;
}

export interface IIsChecked {
  isChecked: boolean;
}

export interface IStyledTextCheckboxProps extends IIsChecked, ICommonProps {
  isWithIcon: boolean;
  isCustomComponent: boolean;
}

export type TTextCheckboxProps = IIsChecked & (ITextCheckboxPropsCustomRender | ITextCheckboxPropsDefault);
