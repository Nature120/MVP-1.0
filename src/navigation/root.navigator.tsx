import React from 'react';

import { APP_ROUTES, ON_BOARD_ROUTES } from '@constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from '@screens/splash';
import { screenOptions } from './navigation.options';

const StartStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <StartStack.Navigator screenOptions={screenOptions}>
      <StartStack.Screen name={APP_ROUTES.start.splash} component={Splash} />
      <StartStack.Screen name={APP_ROUTES.start.signUp} component={() => <></>} />
      <StartStack.Screen name={APP_ROUTES.start.signIn} component={() => <></>} />

      {ON_BOARD_ROUTES.map(({ component, name }) => (
        <StartStack.Screen key={name} name={name} component={component} />
      ))}
    </StartStack.Navigator>
  );
};
