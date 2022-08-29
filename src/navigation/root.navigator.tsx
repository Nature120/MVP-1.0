import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from '@screens/splash';
import { screenOptions } from './navigation.options';

import { APP_ROUTES } from '@constants/routes';

const StartStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <StartStack.Navigator screenOptions={screenOptions}>
      <StartStack.Screen name={APP_ROUTES.start.splash} component={Splash} />
      <StartStack.Screen
        name={APP_ROUTES.start.signUp}
        component={() => <></>}
      />
      <StartStack.Screen
        name={APP_ROUTES.start.signIn}
        component={() => <></>}
      />
    </StartStack.Navigator>
  );
};
