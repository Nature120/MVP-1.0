import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { IPracticeLibrary, IUserTipOfTheDay } from '@typings/common';

export interface IState {
  auth: IAuth;
  timer: ITimer;
}

interface IAuth {
  user: IUser;
  latestLibrary: IPracticeLibrary;
  error: string | null;
  isAuthenticated: boolean;
  isFirstLaunchApp: boolean;
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
  goal?: number;
  timeForImmersion?: Date;
  tipOfTheDay?: IUserTipOfTheDay;
  recentPractices: Array<IFinishedPractices>;
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
