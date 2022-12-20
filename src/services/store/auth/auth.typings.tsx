import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { IPracticeLibrary, IUserTipOfTheDay } from '@typings/common';

export interface IState {
  auth: IAuth;
  timer: ITimer;
}

export interface IAuth {
  user: IUser;
  latestLibrary: IPracticeLibrary;
  error: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isDisturb: boolean;
}

export interface IUser {
  uid: string;
  email?: string | null;
  first_name?: string | null;
  whatBrings?: string[];
  dailyGoal?: number;
  finishedPractices: Array<IFinishedPractices>;
  bookmarks: Array<IBookmarks>;
  goal?: number;
  timeForImmersion?: Date;
  lastEnterAt?: Date;
  tipOfTheDay?: IUserTipOfTheDay;
  recentPractices: Array<IFinishedPractices>;
  subscription?: TSubsctiption;
}

type TSubsctiption = 'FREE' | 'MONTHLY' | 'ANNUAL';

export interface IBookmarks extends IPracticeLibrary {
  created_at: FirebaseFirestoreTypes.Timestamp;
}

export interface IFinishedPractices {
  title: string;
  created_at: FirebaseFirestoreTypes.Timestamp;
}

export interface ITimer {
  startDate: number;
  seconds: number;
  isActiveTimer: boolean;
}

export type TOfferNames = 'ANNUAL' | 'MONTHLY' | 'FREE';
