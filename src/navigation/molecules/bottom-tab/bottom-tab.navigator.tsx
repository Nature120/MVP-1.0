import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { noHeaderOptions } from '../../navigation.options';
import { BottomTabBar } from '../bottom-tab-bar';

import { BOTTOM_TAB_ROUTES } from './bottom-tab.constants';

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
