import React from 'react';

import { APP_ROUTES } from '@constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions } from './navigation.options';

const StartStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <StartStack.Navigator
      screenOptions={screenOptions}
      initialRouteName={APP_ROUTES.start.splash}>
      <StartStack.Screen
        name={APP_ROUTES.start.splash}
        component={() => <></>}
      />
    </StartStack.Navigator>
  );
};
