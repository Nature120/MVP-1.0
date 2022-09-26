import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ImmersionComplete } from '@screens/immersion-complete';
import { ImmersionTimer } from '@screens/immersion-timer';
import { Immersions } from '@screens/immersions';
import { SignInScreen } from '@screens/sign-in-screen/sign-in-screen';
import { SignUpScreen } from '@screens/sign-up-screen/sign-up-screen';
import { Splash } from '@screens/splash';
import { BottomTabNavigator } from './bottom-tab.navigator';
import { screenOptions } from './navigation.options';
import { useNavigationSate } from './navigation.state';

import { APP_ROUTES, ON_BOARD_ROUTES } from '@constants/routes';

const StartStack = createStackNavigator();
const MainStack = createStackNavigator();

export const RootNavigator = () => {
  const { isFirstLaunch, isAuthenitcated } = useNavigationSate();

  const onMarkUpOnBoardRoute = () => {
    if (isFirstLaunch) {
      return (
        <>
          {ON_BOARD_ROUTES.map(({ component, name }) => (
            <StartStack.Screen key={name} name={name} component={component} />
          ))}
          <StartStack.Screen
            options={{ gestureEnabled: false }}
            name={APP_ROUTES.dashboard}
            component={BottomTabNavigator}
          />
          <StartStack.Screen name={APP_ROUTES.immersionTimer} component={ImmersionTimer} />
          <StartStack.Screen name={APP_ROUTES.immersions} component={Immersions} />
          <StartStack.Screen name={APP_ROUTES.immersionComplete} component={ImmersionComplete} />
        </>
      );
    } else {
      return (
        <>
          <StartStack.Screen
            options={{ gestureEnabled: false }}
            name={APP_ROUTES.dashboard}
            component={BottomTabNavigator}
          />
          <StartStack.Screen name={APP_ROUTES.immersionTimer} component={ImmersionTimer} />
          <StartStack.Screen name={APP_ROUTES.immersions} component={Immersions} />
          <StartStack.Screen name={APP_ROUTES.immersionComplete} component={ImmersionComplete} />
        </>
      );
    }
  };

  const onMarkUpSplashRoute = () => {
    if (isFirstLaunch) {
      return (
        <>
          <StartStack.Screen name={APP_ROUTES.start.splash} component={Splash} />
          <StartStack.Screen name={APP_ROUTES.start.signIn} component={SignInScreen} />
          <StartStack.Screen name={APP_ROUTES.start.signUp} component={SignUpScreen} />
        </>
      );
    } else {
      return (
        <>
          <StartStack.Screen name={APP_ROUTES.start.signIn} component={SignInScreen} />
          <StartStack.Screen name={APP_ROUTES.start.signUp} component={SignUpScreen} />
        </>
      );
    }
  };

  const boardRoute = onMarkUpOnBoardRoute();
  const splashRoute = onMarkUpSplashRoute();

  if (isAuthenitcated) {
    return <MainStack.Navigator screenOptions={screenOptions}>{boardRoute}</MainStack.Navigator>;
  }

  return <StartStack.Navigator screenOptions={screenOptions}>{splashRoute}</StartStack.Navigator>;
};
