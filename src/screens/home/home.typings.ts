import { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links';

import { TSubsctiption } from '@services/store/auth/auth.typings';

export interface TUserPremiumInfo {
  subscription: TSubsctiption | undefined;
  storeSubscription: (productIdentifier: string) => Promise<void>;
}

export interface IHandleDynamicLinks {
  link: FirebaseDynamicLinksTypes.DynamicLink | null;
  navigate: (route: string, {}) => any;
}
