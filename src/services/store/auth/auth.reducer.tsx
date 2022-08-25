import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as operation from './auth.operations';

const user = createReducer([], {
  [operation.login.fulfilled.type]: (_, { payload }) => payload,
  //   [operation.signUp.fulfilled.type]: (_, { payload }) => payload,
  //   [operation.signOut.fulfilled.type]: () => [],
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
  //   [operation.login.fulfilled.type]: () => true,
  //   [operation.login.rejected.type]: () => false,
  //   [operation.login.pending.type]: () => false,
  //   [operation.signUp.fulfilled.type]: () => true,
  //   [operation.signUp.rejected.type]: () => false,
  //   [operation.signUp.pending.type]: () => false,
  //   [operation.signOut.fulfilled.type]: () => false,
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
