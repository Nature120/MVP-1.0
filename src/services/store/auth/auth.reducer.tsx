import { combineReducers, createReducer } from '@reduxjs/toolkit';

import * as action from './auth.actions';

import { initialState } from './auth.constants';

import { IBookmarks } from './auth.typings';

const user = createReducer(initialState, {
  [action.signIn.type]: (_, { payload }) => payload,
  [action.partialUpdateUser.type]: (userInfo, { payload }) => ({ ...userInfo, ...payload }),
  [action.addFinishedPractic.type]: (state, { payload }) => ({
    ...state,
    finishedPractices: [...state.finishedPractices, payload],
  }),
  [action.updateSubscription.type]: (state, { payload }) => ({ ...state, subscription: payload }),
  [action.filterExpiredPractices.type]: (state, { payload }) => ({ ...state, finishedPractices: [...payload] }),
  [action.addRecentPractice.type]: (state, { payload }) => ({
    ...state,
    recentPractices: [...state.recentPractices, payload],
  }),
  [action.addBookmarks.type]: (state, { payload }) => ({ ...state, bookmarks: [...state.bookmarks, payload] }),
  [action.removeBookmarks.type]: (state, { payload }) => ({
    ...state,
    bookmarks: state.bookmarks.filter((bookMark: IBookmarks) => bookMark.title !== payload),
  }),
  [action.setWeeklyUserGoal.type]: (state, { payload }) => ({ ...state, goal: payload }),
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
