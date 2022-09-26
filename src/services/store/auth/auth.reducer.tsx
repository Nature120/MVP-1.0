import { combineReducers, createReducer } from '@reduxjs/toolkit';

import * as action from './auth.actions';

import { initialState } from './auth.constants';

const user = createReducer(initialState, {
  [action.signIn.type]: (_, { payload }) => payload,
  [action.partialUpdateUser.type]: (userInfo, { payload }) => ({ ...userInfo, ...payload }),
  [action.signOut.type]: () => initialState,
});

const isAuthenticated = createReducer(false, {
  [action.signIn.type]: () => true,
  [action.isAuthenticated.type]: (_, { payload }) => payload,
  [action.signOut.type]: () => false,
});

const isFirstLaunchApp = createReducer(true, {
  [action.isNotFirstLaunch.type]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  isFirstLaunchApp,
});
