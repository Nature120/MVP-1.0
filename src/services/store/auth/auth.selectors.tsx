import { IState } from './auth.typings';

export const getAuthentication = (state: IState) => state.auth.isAuthenticated;
export const getEmail = (state: IState) => state.auth.user.email;
export const getFirstName = (state: IState) => state.auth.user.first_name;
export const getUid = (state: IState) => state.auth.user.uid;
export const getFirstLaunch = (state: IState) => state.auth.isFirstLaunchApp;
export const getUserInfo = (state: IState) => state.auth.user;
export const getLoading = (state: IState) => state.auth.isLoading;
export const getFisishedPractices = (state: IState) => state.auth.user.finishedPractices;
export const getIsDisturb = (state: IState) => state.auth.isDisturb;
