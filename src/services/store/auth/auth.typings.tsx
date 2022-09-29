import { IId, IUserTipOfTheDay } from '@typings/common';

export interface IState {
  auth: IAuth;
}

interface IAuth {
  user: IUser;
  error: string | null;
  isAuthenticated: boolean;
  isFirstLaunchApp: boolean;
  isLoading: boolean;
}

interface IUserComment {
  date: Date;
  before?: string;
  after?: string;
}

export interface IUser {
  uid: string;
  email?: string | null;
  first_name?: string | null;
  whatBrings?: string[];
  dailyGoal?: number;
  goal?: number;
  timeForImmersion?: Date;
  comments?: IUserComment[];
  tipOfTheDay?: IUserTipOfTheDay;
  finishedPractices: IActionAddPractic[];
  recentPractices: IActionAddPractic[];
}

export interface IActionAddPractic {
  title: string;
  created_at: Date;
}