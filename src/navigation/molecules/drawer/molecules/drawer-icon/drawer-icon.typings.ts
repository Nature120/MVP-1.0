import { IBottomTabRoutes } from '@navigation/molecules/bottom-tab/bottom-tab.typings';

export interface IDrawerIcon {
  color: string;
  size: number;
  focused: boolean;
}

export type TDrawerIcon = Pick<IBottomTabRoutes, 'icon'>;
