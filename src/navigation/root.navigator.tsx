import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthScreen } from '@screens/auth-screen/auth-screen';
import { Splash } from '@screens/splash';
import { screenOptions } from './navigation.options';

import { APP_ROUTES, ON_BOARD_ROUTES } from '@constants/routes';

const StartStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <StartStack.Navigator screenOptions={screenOptions}>
      {/* <StartStack.Screen name={APP_ROUTES.start.splash} component={Splash} /> */}
      <StartStack.Screen name={APP_ROUTES.start.signUp} component={AuthScreen} />
      <StartStack.Screen name={APP_ROUTES.start.signIn} component={() => <></>} />

      {ON_BOARD_ROUTES.map(({ component, name }) => (
        <StartStack.Screen key={name} name={name} component={component} />
      ))}
    </StartStack.Navigator>
  );
};
