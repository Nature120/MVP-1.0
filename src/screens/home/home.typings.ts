import { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links';

import { IUser, TSubsctiption } from '@services/store/auth/auth.typings';

export interface TUserPremiumInfo {
  subscription: TSubsctiption | undefined;
  storeSubscription: (productIdentifier: string) => Promise<void>;
  user: IUser;
}

export interface IHandleDynamicLinks {
  link: FirebaseDynamicLinksTypes.DynamicLink | null;
  navigate: (route: string, {}) => any;
}
