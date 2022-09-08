import { combineReducers, createReducer } from '@reduxjs/toolkit';

import * as action from './auth.actions';

import { initialState } from './auth.constants';

const user = createReducer(initialState, {
  [action.signUp.type]: (_, { payload }) => payload,
  [action.signIn.type]: (_, { payload }) => payload,
  [action.signOut.type]: () => initialState,
  //   [action.notAuthenticated.type]: () => [],
});

const error = createReducer(null, {
  //   [operation.login.rejected.type]: (_, { payload }) => payload,
  //   [operation.login.fulfilled.type]: () => null,
  //   [operation.signUp.rejected.type]: (_, { payload }) => payload,
  //   [operation.signUp.fulfilled.type]: () => null,
  //   [operation.signOut.rejected.type]: (_, { payload }) => payload,
  //   [operation.signUp.fulfilled.type]: () => null,
  //   [action.errorReset.type]: () => null,
});

const isAuthenticated = createReducer(false, {
  [action.signUp.type]: () => true,
  [action.signIn.type]: () => true,
  [action.isAuthenticated.type]: (_, { payload }) => payload,
  [action.signOut.type]: () => false,
  //   [operation.login.rejected.type]: () => false,
  //   [operation.login.pending.type]: () => false,
  // [action.signUp.fulfilled.type]: () => true,
  // [action.signUp.rejected.type]: () => false,
  // [action.signUp.pending.type]: () => false,
  //   [action.notAuthenticated.type]: () => false,
});

const isFirstLaunchApp = createReducer(true, {
  //   [action.firstLaunch.type]: () => false,
});

export default combineReducers({
  user,
  error,
  isAuthenticated,
  isFirstLaunchApp,
});
