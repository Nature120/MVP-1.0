import { createAction } from '@reduxjs/toolkit';

import { IFinishedPractices, IUser } from './auth.typings';

export const signIn = createAction<IUser>('auth/signIn');
export const isFirstLaunch = createAction<boolean>('auth/isFirstLaunch');
export const partialUpdateUser = createAction<Partial<IUser>>('auth/partialUpdateUser');
export const isAuthenticated = createAction<boolean>('auth/isAuthenticated');
export const signOut = createAction<null>('auth/signOut');
export const addFinishedPractic = createAction<IFinishedPractices>('auth/addedFinishedPractic');
export const addRecentPractice = createAction<IFinishedPractices>('auth/addRecentPractice');
export const loading = createAction<boolean>('auth/loading');
export const filterExpiredPractices = createAction<IFinishedPractices[] | undefined>('auth/filterExpiredPractices');
