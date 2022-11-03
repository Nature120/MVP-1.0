import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { appInitialState } from './app.constants';
export const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    setCommentBeforeImmersion: (state, action: PayloadAction<string>) => {
      state.commentBeforeImmersion = action.payload;
    },
    setNotificationsList: (state, action: PayloadAction<string[]>) => {
      state.notificationsList = action.payload;
    },
    setIsFirstLaunchApp: (state, action: PayloadAction<boolean>) => {
      state.isFirstLaunchApp = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;
export const { setCommentBeforeImmersion, setNotificationsList, setIsFirstLaunchApp } = actions;
export { reducer as appReducer };
