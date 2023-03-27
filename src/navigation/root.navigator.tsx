import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ImmersionComplete } from '@screens/immersion-complete';
import { ImmersionTimer } from '@screens/immersion-timer';
import { Immersions } from '@screens/immersions';
import { PromoCodeScreen } from '@screens/promo-code/promo-code';
import { SignInScreen } from '@screens/sign-in-screen/sign-in-screen';
import { SignUpScreen } from '@screens/sign-up-screen/sign-up-screen';
import { Splash } from '@screens/splash';
import { SubscribeScreen } from '@screens/subscribe/subscribe';
import { TeacherProfileScreen } from '@screens/teacher-profile/teacher-profile';
import { DrawerNavigator } from './molecules/drawer/drawer.navigator';
import { disabledGestures, noHeaderOptions, screenOptions } from './navigation.options';
import { useNavigationSate } from './navigation.state';

import { ON_BOARD_ROUTES } from './navigation.constants';
import { APP_ROUTES } from '@constants/routes';

import { TScreenOptions } from '@typings/common';

const StartStack = createStackNavigator();

export const RootNavigator = () => {
  const { isFirstLaunchApp, isAuth, isInitializing } = useNavigationSate();

  const mainRoutes = () => (
    <>
      {ON_BOARD_ROUTES.map(({ component, name }) => (
        <StartStack.Screen key={name} name={name} component={component} />
      ))}
      <StartStack.Screen
        name={APP_ROUTES.drawer}
        component={DrawerNavigator}
        options={{ ...noHeaderOptions, ...disabledGestures } as TScreenOptions}
      />
      <StartStack.Screen name={APP_ROUTES.immersionTimer} component={ImmersionTimer} options={disabledGestures} />
      <StartStack.Screen name={APP_ROUTES.immersions} component={Immersions} />
      <StartStack.Screen name={APP_ROUTES.immersionComplete} component={ImmersionComplete} />
      <StartStack.Screen name={APP_ROUTES.subscribe} component={SubscribeScreen} />
      <StartStack.Screen name={APP_ROUTES.promoCode} component={PromoCodeScreen} />
      <StartStack.Screen name={APP_ROUTES.teacherProfile} component={TeacherProfileScreen} />
    </>
  );

  const initialRoutes = () =>
    isFirstLaunchApp ? (
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
