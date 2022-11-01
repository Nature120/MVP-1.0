import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AgreeTermsOfServices } from '@screens/agree-terms-of-services';
import { ImmersionComplete } from '@screens/immersion-complete';
import { ImmersionTimer } from '@screens/immersion-timer';
import { Immersions } from '@screens/immersions';
import { SignInScreen } from '@screens/sign-in-screen/sign-in-screen';
import { SignUpScreen } from '@screens/sign-up-screen/sign-up-screen';
import { Splash } from '@screens/splash';
import { TermsOfServices } from '@screens/terms-of-services';
import { BottomTabNavigator } from './molecules/bottom-tab/bottom-tab.navigator';
import { DrawerNavigator } from './molecules/drawer/drawer.navigator';
import { disabledGestures, noHeaderOptions, screenOptions } from './navigation.options';
import { useNavigationSate } from './navigation.state';

import { ON_BOARD_ROUTES } from './navigation.constants';
import { APP_ROUTES } from '@constants/routes';

const StartStack = createStackNavigator();

export const RootNavigator = () => {
  const { isFirstLaunch, isAuth, isInitializing } = useNavigationSate();

  const mainRoutes = () =>
    isFirstLaunch ? (
      <>
        <StartStack.Screen
          name={APP_ROUTES.agreeTermsOfServices}
          options={disabledGestures}
          component={AgreeTermsOfServices}
        />
        <StartStack.Screen name={APP_ROUTES.TermsOfServices} component={TermsOfServices} />
        {ON_BOARD_ROUTES.map(({ component, name }) => (
          <StartStack.Screen key={name} name={name} component={component} />
        ))}
        <StartStack.Screen name={APP_ROUTES.dashboard} component={BottomTabNavigator} options={disabledGestures} />
        <StartStack.Screen name={APP_ROUTES.immersionTimer} component={ImmersionTimer} options={disabledGestures} />
        <StartStack.Screen name={APP_ROUTES.immersions} component={Immersions} />
        <StartStack.Screen name={APP_ROUTES.immersionComplete} component={ImmersionComplete} />
      </>
    ) : (
      <>
        <StartStack.Screen name={APP_ROUTES.drawer} component={DrawerNavigator} options={noHeaderOptions} />
        <StartStack.Screen name={APP_ROUTES.immersionTimer} component={ImmersionTimer} options={disabledGestures} />
        <StartStack.Screen name={APP_ROUTES.immersions} component={Immersions} />
        <StartStack.Screen name={APP_ROUTES.immersionComplete} component={ImmersionComplete} />
      </>
    );

  const initialRoutes = () =>
    isFirstLaunch ? (
      <>
        <StartStack.Screen name={APP_ROUTES.start.splash} component={Splash} />
        <StartStack.Screen name={APP_ROUTES.start.signIn} component={SignInScreen} />
        <StartStack.Screen name={APP_ROUTES.start.signUp} component={SignUpScreen} />
      </>
    ) : (
      <>
        <StartStack.Screen name={APP_ROUTES.start.signIn} component={SignInScreen} />
        <StartStack.Screen name={APP_ROUTES.start.signUp} component={SignUpScreen} />
      </>
    );

  if (isInitializing) {
    return null;
  }

  return (
    <StartStack.Navigator screenOptions={screenOptions}>{isAuth ? mainRoutes() : initialRoutes()}</StartStack.Navigator>
  );
};
