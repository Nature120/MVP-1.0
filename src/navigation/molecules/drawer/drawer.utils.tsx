import React from 'react';

import { Icon } from '@components/atoms/icon';

import { IBottomTabRoutes } from '../bottom-tab/bottom-tab.typings';

interface IDrawerIcon {
  color: string;
  size: number;
  focused: boolean;
}

type TIcon = Pick<IBottomTabRoutes, 'icon'>;

export const drawerIcon =
  ({ icon }: TIcon) =>
  ({ focused }: IDrawerIcon) =>
    <Icon type={icon.type} colorIcon={focused ? 'green' : 'cloudyGreen'} width={icon.width} height={icon.height} />;
