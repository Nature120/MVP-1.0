import { IState } from './auth.interface';

export const getAuthentication = (state: IState) => state.auth.isAuthenticated;
export const getEmail = (state: IState) => state.auth.user.email;
export const getFirstName = (state: IState) => state.auth.user.first_name;
export const getUid = (state: IState) => state.auth.user.uid;
export const getFirstLaunch = (state: IState) => state.auth.isFirstLaunchApp;
