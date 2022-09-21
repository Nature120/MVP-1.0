import { ITextCheckBox } from '@components/molecules/text-checkbox/text-checkbox.typings';

import { TStyles } from '@typings/common';

interface ICommonProps {
  variants: ITextCheckBox[];
  gap?: number;
  styles?: TStyles;
  checkboxStyles?: TStyles;
}

interface ISingleTextCheckboxGroupProps extends ICommonProps {
  isMulti?: false;
  onChange: (result: string) => void;
}

interface IMultiTextCheckboxGroupProps extends ICommonProps {
  isMulti: true;
  onChange: (result: string[]) => void;
}

export type TTextCheckboxGroupProps = IMultiTextCheckboxGroupProps | ISingleTextCheckboxGroupProps;

export interface IGroupState extends ITextCheckBox {
  name: string;
  isChecked: boolean;
}
