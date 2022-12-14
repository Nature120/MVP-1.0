import { createAction } from '@reduxjs/toolkit';

import { IBookmarks, IFinishedPractices, IUser } from './auth.typings';
import { IPracticeLibrary } from '@typings/common';

export const signIn = createAction<IUser>('auth/signIn');
export const partialUpdateUser = createAction<Partial<IUser>>('auth/partialUpdateUser');
export const isAuthenticated = createAction<boolean>('auth/isAuthenticated');
export const signOut = createAction<null>('auth/signOut');
export const addFinishedPractic = createAction<IFinishedPractices>('auth/addedFinishedPractic');
export const addRecentPractice = createAction<IFinishedPractices>('auth/addRecentPractice');
export const loading = createAction<boolean>('auth/loading');
export const filterExpiredPractices = createAction<IFinishedPractices[] | undefined>('auth/filterExpiredPractices');
export const isDisturb = createAction<boolean>('auth/isDisturb');
export const addLatestLibrary = createAction<IPracticeLibrary>('auth/addLatestLibrary');
export const clearLatestLibrary = createAction('auth/clearLatestLibrary');
export const addSubscriptionProducts = createAction<any>('auth/addSubscriptionProducts');
export const addBookmarks = createAction<IBookmarks>('auth/addBookmarks');
export const removeBookmarks = createAction<string>('auth/removeBookmarks');
