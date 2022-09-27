import { TIconNames } from '@components/atoms/icon/icon.typings';

export interface IOnboardingRoutes {
  name: string;
  component: React.FC<any>;
}

export interface IBottomTabRoutes extends IOnboardingRoutes {
  icon: { type: TIconNames; width: number; height: number };
}
