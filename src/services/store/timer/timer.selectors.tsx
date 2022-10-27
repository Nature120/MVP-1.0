import { IState } from '../auth/auth.typings';

export const getStartDate = (state: IState) => state.timer.startDate;
export const getSeconds = (state: IState) => state.timer.seconds;
export const getIsActive = (state: IState) => state.timer.isActiveTimer;
