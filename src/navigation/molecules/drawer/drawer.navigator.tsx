import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { customDrawer } from './molecules/custom-drawer';
import { drawerIcon } from './molecules/drawer-icon';

import { useSignOut } from '@services/hooks/sign-out';

import { DRAWER_ROUTES, DRAWER_SCREEN_OPTIONS } from './drawer.constants';
import { APP_ROUTES } from '@constants/routes';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { onSignOut } = useSignOut();

  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={DRAWER_SCREEN_OPTIONS}
      drawerContent={customDrawer(onSignOut)}>
      {DRAWER_ROUTES.map(({ component, name, icon }) => (
        <Drawer.Screen
          key={name}
          name={name}
          component={component}
          options={{
            drawerIcon: drawerIcon({ icon }),
            title: name === APP_ROUTES.dashboard ? 'Home' : name,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
