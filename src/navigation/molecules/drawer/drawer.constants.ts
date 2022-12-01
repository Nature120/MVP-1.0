import { DrawerNavigationOptions } from '@react-navigation/drawer';

import { Bookmarks } from '@screens/bookmarks/bookmarks';
import { Notifications } from '@screens/notifications';
import { BottomTabNavigator } from '../bottom-tab/bottom-tab.navigator';

import { APP_ROUTES } from '@constants/routes';

import { IBottomTabRoutes } from '../bottom-tab/bottom-tab.typings';

import { COLOR } from '@theme/colors';

export const DRAWER_ROUTES: IBottomTabRoutes[] = [
  { name: APP_ROUTES.dashboard, component: BottomTabNavigator, icon: { type: 'home', width: 24, height: 24 } },
  { name: 'Notifications', component: Notifications, icon: { type: 'notifications', width: 24, height: 24 } },
  { name: 'Bookmarks', component: Bookmarks, icon: { type: 'leaf', width: 24, height: 24 } },
];

export const DRAWER_SCREEN_OPTIONS: DrawerNavigationOptions = {
  drawerStyle: {
    width: 240,
  },
  headerShown: false,
  drawerPosition: 'right',
  drawerType: 'front',
  drawerActiveBackgroundColor: COLOR.background.beigeLight,
  drawerActiveTintColor: COLOR.primary.green,
  drawerInactiveTintColor: COLOR.subheading,
  drawerLabelStyle: { marginLeft: -25 },
  swipeEdgeWidth: 0,
};
