import { createAction } from '@reduxjs/toolkit';

import { IUser } from './auth.interface';

export const signIn = createAction<IUser>('auth/signIn');
export const isNotFirstLaunch = createAction<null>('auth/isNotFirstLaunch');
export const partialUpdateUser = createAction<Partial<IUser>>('auth/partialUpdateUser');
export const isAuthenticated = createAction<boolean>('auth/isAuthenticated');
export const signOut = createAction<null>('auth/signOut');
