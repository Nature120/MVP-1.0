import React from 'react';

import { Icon } from '@components/atoms/icon';

import { IDrawerIcon, TDrawerIcon } from './drawer-icon.typings';

export const drawerIcon =
  ({ icon }: TDrawerIcon) =>
  ({ focused }: IDrawerIcon) =>
    <Icon type={icon.type} colorIcon={focused ? 'green' : 'green'} width={icon.width} height={icon.height} />;
