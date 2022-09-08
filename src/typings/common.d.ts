import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { SimpleInterpolation } from 'styled-components';

export type TStyles = SimpleInterpolation;

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

export type TScreenOptions =
  | StackNavigationOptions
  | ((props: { route: RouteProp<ParamListBase, string>; navigation: any }) => StackNavigationOptions)
  | undefined;

export type TFirebaseUser = FirebaseAuthTypes.User | null;
export type TFirebaseUserCredentials = FirebaseAuthTypes.UserCredential;
export type TFirebaseAuthCredentials = FirebaseAuthTypes.AuthCredential;
