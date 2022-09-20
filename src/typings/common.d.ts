import { StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import { SimpleInterpolation } from 'styled-components';

import { ONBOARDING_GOAL_HASH_MAP } from '@screens/onboarding/onboarding.constants';

export type TStyles = SimpleInterpolation;
export type TViewProps = StyleProp<ViewStyle>;
export type TAnimatedViewProps = StyleProp<Animated.AnimateStyle<ViewStyle>>;
export type TAnimatedNumber = Animated.Node<number>;

export type TDailyGoal = keyof typeof ONBOARDING_GOAL_HASH_MAP;

export interface IError {
  message?: string;
  code?: number | string;
}

export interface IResponseError {
  status: number;
  response: {
    status: number;
    data: IError;
  };
}

export interface IId {
  id: string;
}

export interface IAddedTime {
  addedTime: number;
}

export type TScreenOptions =
  | StackNavigationOptions
  | ((props: { route: RouteProp<ParamListBase, string>; navigation: any }) => StackNavigationOptions)
  | undefined;

export type TFirebaseUser = FirebaseAuthTypes.User | null;
export type TFirebaseUserCredentials = FirebaseAuthTypes.UserCredential;
export type TFirebaseAuthCredentials = FirebaseAuthTypes.AuthCredential;

export type TNavigation = StackNavigationProp<any, 'Sign In'>;
