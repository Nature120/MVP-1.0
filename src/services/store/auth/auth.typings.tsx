import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { IUserTipOfTheDay } from '@typings/common';

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
