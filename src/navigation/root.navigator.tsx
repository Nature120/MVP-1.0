import React from 'react';

import { ScreenTest } from '@screens/screen-test';

import { APP_ROUTES } from '@constants/routes';
import { createStackNavigator } from '@react-navigation/stack';

const StartStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <StartStack.Navigator>
      <StartStack.Screen
        name={APP_ROUTES.start.splash}
        component={ScreenTest}
      />
      <StartStack.Screen
        name={APP_ROUTES.start.signUp}
        component={ScreenTest}
      />
      <StartStack.Screen
        name={APP_ROUTES.start.signIn}
        component={ScreenTest}
      />
    </StartStack.Navigator>
  );
};
