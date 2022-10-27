import { combineReducers, createReducer } from '@reduxjs/toolkit';

import * as action from './timer.actions';

const startDate = createReducer(null, {
  [action.startDate.type]: (_, { payload }) => payload,
});

const seconds = createReducer(null, {
  [action.seconds.type]: (_, { payload }) => payload,
});

const isActiveTimer = createReducer(true, {
  [action.isActive.type]: (_, { payload }) => payload,
});

export default combineReducers({
  startDate,
  seconds,
  isActiveTimer,
});
