import { combineReducers, createReducer } from '@reduxjs/toolkit';

import * as action from './auth.actions';

import { initialState } from './auth.constants';

const user = createReducer(initialState, {
  [action.signIn.type]: (_, { payload }) => payload,
  [action.partialUpdateUser.type]: (userInfo, { payload }) => ({ ...userInfo, ...payload }),
  [action.addFinishedPractic.type]: (state, { payload }) => ({
    ...state,
    finishedPractices: [...state.finishedPractices, payload],
  }),
  [action.filterExpiredPractices.type]: (state, { payload }) => ({ ...state, finishedPractices: [...payload] }),
  [action.addRecentPractice.type]: (state, { payload }) => ({
    ...state,
    recentPractices: [...state.recentPractices, payload],
  }),
  [action.signOut.type]: () => initialState,
});

const latestLibrary = createReducer([], {
  [action.addLatestLibrary.type]: (_, { payload }) => payload,
  [action.clearLatestLibrary.type]: () => [],
});

const isAuthenticated = createReducer(false, {
  [action.signIn.type]: () => true,
  [action.isAuthenticated.type]: (_, { payload }) => payload,
  [action.signOut.type]: () => false,
});

const isLoading = createReducer(false, {
  [action.loading.type]: (_, { payload }) => payload,
});

const isDisturb = createReducer(false, {
  [action.isDisturb.type]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  latestLibrary,
  isAuthenticated,
  isLoading,
  isDisturb,
});
