import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { TScreenOptions } from '@typings/common';

import { COLOR } from '@theme/colors';

export const noHeaderOptions: TScreenOptions & BottomTabNavigationOptions = {
  headerShown: false,
};

export const screenOptions: TScreenOptions = {
  ...noHeaderOptions,
  cardStyle: {
    backgroundColor: COLOR.background.white,
  },
};
