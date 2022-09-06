import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { TScreenOptions } from '@typings/common';

export const noHeaderOptions: TScreenOptions & BottomTabNavigationOptions = {
  headerShown: false,
};

export const screenOptions: TScreenOptions = {
  ...noHeaderOptions,
  cardStyle: {
    backgroundColor: '#fff',
  },
};
