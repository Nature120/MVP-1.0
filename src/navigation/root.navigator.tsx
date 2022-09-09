import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@screens/home/home';
import { ImmersionTimer } from '@screens/immersion-timer';
import { Immersions } from '@screens/immersions';
import { SignUpScreen } from '@screens/sign-up-screen/sign-up-screen';
import { Splash } from '@screens/splash';
import { BottomTabNavigator } from './bottom-tab.navigator';
import { screenOptions } from './navigation.options';

import { getUser } from '@services/api.service';
import { isAuthenticated, signIn } from '@services/store/auth/auth.actions';
import { getAuthentication } from '@services/store/auth/auth.selectors';

import { APP_ROUTES, ON_BOARD_ROUTES } from '@constants/routes';

import { TFirebaseUser } from '@typings/common';

const StartStack = createStackNavigator();
const MainStack = createStackNavigator();

export const RootNavigator = () => {
  const dispatch = useDispatch();
  const authenitcated = useSelector(getAuthentication);
  const isFirstLaunch = true;

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onAuthStateChanged = async (user: TFirebaseUser) => {
    if (user === null) {
      dispatch(isAuthenticated(false));
      return;
    }
    saveUser(user);
  };

  const saveUser = async (currentUser: TFirebaseUser) => {
    if (currentUser === null) {
      return;
    }
    const { uid } = currentUser;

    const userCredentials = await getUser(uid);
    const data = { ...userCredentials, uid };

    dispatch(signIn(data));
  };

  if (authenitcated) {
    return (
      <MainStack.Navigator
        screenOptions={screenOptions}
        initialRouteName={isFirstLaunch ? APP_ROUTES.start.onBoard : APP_ROUTES.main.home}>
        {ON_BOARD_ROUTES.map(({ component, name }) => (
          <StartStack.Screen key={name} name={name} component={component} />
        ))}

        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    );
  }
  return (
    <StartStack.Navigator
      screenOptions={screenOptions}
      initialRouteName={isFirstLaunch ? APP_ROUTES.start.splash : APP_ROUTES.start.signUp}>
      <StartStack.Screen name={APP_ROUTES.start.splash} component={Splash} />
      <StartStack.Screen name={APP_ROUTES.start.signUp} component={SignUpScreen} />
      <StartStack.Screen name={APP_ROUTES.start.signIn} component={() => <></>} />

      <StartStack.Screen name={APP_ROUTES.dashboard} component={BottomTabNavigator} />
      <StartStack.Screen name={APP_ROUTES.immersionTimer} component={ImmersionTimer} />
      <StartStack.Screen name={APP_ROUTES.immersions} component={Immersions} />
    </StartStack.Navigator>
  );
};
