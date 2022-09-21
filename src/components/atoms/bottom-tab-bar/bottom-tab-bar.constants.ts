import { Insets } from 'react-native';

import { IIconProps } from '@components/atoms/icon/icon.typings';

import { BOTTOM_TAB_ROUTES } from '@constants/routes';

import { TColorIcon } from '@theme/colors';

export const bottomTabBarHitSlop: Insets = { top: 20, bottom: 20, left: 20, right: 20 };

export const getIconProps = (isFocused: boolean, routeName: string) => {
  const icon = BOTTOM_TAB_ROUTES.find(tabRoute => tabRoute.name === routeName)!.icon;
  const props: IIconProps = {
    ...icon,
    colorIcon: (isFocused ? 'green' : 'cloudyGreen') as TColorIcon,
  };
  return props;
};
