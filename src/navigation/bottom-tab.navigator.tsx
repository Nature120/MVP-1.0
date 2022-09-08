import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabBar } from '../components/bottom-tab-bar/bottom-tab-bar';
import { noHeaderOptions } from './navigation.options';

import { BOTTOM_TAB_ROUTES } from '@constants/routes';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={BottomTabBar} screenOptions={noHeaderOptions}>
      {BOTTOM_TAB_ROUTES.map(({ component, name }) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
};
