import { StyleProp } from 'react-native';
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
