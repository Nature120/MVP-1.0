import { createAction } from '@reduxjs/toolkit';

export const startDate = createAction<number | null>('timer/startDate');
export const seconds = createAction<number | null>('timer/seconds');
export const isActive = createAction<boolean>('timer/isActive');
