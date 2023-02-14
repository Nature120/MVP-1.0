import { TIconNames } from '@components/atoms/icon/icon.typings';

import { TColorIcon } from '@theme/colors';

export interface IProp {
  labelText: string;
  fill?: TColorIcon;
  icon: TIconNames;
  handleAuth?: () => void;
  nameOfScreen?: string;
}
