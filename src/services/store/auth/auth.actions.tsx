import { createAction } from '@reduxjs/toolkit';

import { IActionAddPractic, IUser } from './auth.interface';

export const signIn = createAction<IUser>('auth/signIn');
export const firstLaunch = createAction<null>('auth/firstLaunch');
export const isNotFirstLaunch = createAction<null>('auth/isNotFirstLaunch');
export const partialUpdateUser = createAction<Partial<IUser>>('auth/partialUpdateUser');
export const isAuthenticated = createAction<boolean>('auth/isAuthenticated');
export const signOut = createAction<null>('auth/signOut');
export const addFinishedPractic = createAction<IActionAddPractic>('auth/addedFinishedPractic');
