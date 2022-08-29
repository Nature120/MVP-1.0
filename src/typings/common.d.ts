import { StyleProp } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { FlattenInterpolation, ThemeProps } from 'styled-components';

export type TStyles = FlattenInterpolation<ThemeProps<any>> | StyleProp<any>;

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
  | ((props: {
      route: RouteProp<ParamListBase, string>;
      navigation: any;
    }) => StackNavigationOptions)
  | undefined;
