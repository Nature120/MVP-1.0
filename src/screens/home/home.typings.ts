import { TSubsctiption } from '@services/store/auth/auth.typings';

export interface TUserPremiumInfo {
  subscription: TSubsctiption | undefined;
  storeSubscription: (productIdentifier: string) => Promise<void>;
}
