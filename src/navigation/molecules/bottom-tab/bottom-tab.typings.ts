import { TIconNames } from '@components/atoms/icon/icon.typings';

import { IOnboardingRoutes } from '@navigation/navigation.typings';

export interface IBottomTabRoutes extends IOnboardingRoutes {
  icon: { type: TIconNames; width: number; height: number };
}
