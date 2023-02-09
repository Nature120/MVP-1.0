import { ListRenderItem, StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import { SimpleInterpolation } from 'styled-components';

import { ONBOARDING_GOAL_HASH_MAP } from '@screens/onboarding/onboarding.constants';

export type TStyles = SimpleInterpolation;
export type TViewProps = StyleProp<ViewStyle>;
export type TAnimatedViewProps = StyleProp<Animated.AnimateStyle<ViewStyle>>;
export type TAnimatedNumber = Animated.Node<number>;
export type TItemRender = ListRenderItem<IPracticeLibrary>;

export type TDailyGoal = keyof typeof ONBOARDING_GOAL_HASH_MAP;

export type TDocument = FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>;

export interface ITipOfTheDay {
  title: string;
  body: string;
}

export interface IUserTipOfTheDay {
  timestamp: number;
  tip: ITipOfTheDay;
  tipIndex: number;
}

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

export interface IPracticeLibrary {
  image: string;
  title: string;
  season: Array<string>;
  description: string;
  topCategory: string;
  duration: {
    from: number;
    to: number;
  };
  userGoals: string[];
  audioDuration?: number;
  audioFile?: string;
  teacher?: ITeacher;
  indoorOutdoor?: string;
  subscription?: TAccess;
}

export interface ITeacher {
  audioPractices: string[];
  avatar: string;
  fullName: string;
  location: string;
  teacherTitle: string;
}

type TAccess = 'Free' | 'Subscription';

export interface IAudioFile {
  audioDuration?: number;
  audioFile?: string;
  teacher: ITeacher;
}

export type TScreenOptions =
  | StackNavigationOptions
  | ((props: { route: RouteProp<ParamListBase, string>; navigation: any }) => StackNavigationOptions)
  | undefined;

export type TFirebaseUser = FirebaseAuthTypes.User | null;
export type TFirebaseUserCredentials = FirebaseAuthTypes.UserCredential;
export type TFirebaseAuthCredentials = FirebaseAuthTypes.AuthCredential;

export type TNavigation = StackNavigationProp<any, 'Sign In'>;
