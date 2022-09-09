import { Community } from '@screens/community';
import { Home } from '@screens/home';
import { QuestionsStart, Start, ThankYou, TimeForImmersion, WeeklyGoal, WhatBrings } from '@screens/onboarding';
import { Practices } from '@screens/practices';
import { TimerStats } from '@screens/timer-stats';
import { TIconNames } from '@components/icon/icon.typings';

interface IOnboardingRoutes {
  name: string;
  component: React.FC<any>;
}
interface IBottomTabRoutes extends IOnboardingRoutes {
  icon: { type: TIconNames; width: number; height: number };
}

export const ON_BOARD_ROUTES: IOnboardingRoutes[] = [
  { name: 'start', component: Start },
  { name: 'questionsStart', component: QuestionsStart },
  { name: 'whatBrings', component: WhatBrings },
  { name: 'thankYou', component: ThankYou },
  { name: 'weeklyGoal', component: WeeklyGoal },
  { name: 'timeForImmersion', component: TimeForImmersion },
];

export const BOTTOM_TAB_ROUTES: IBottomTabRoutes[] = [
  { name: 'Home', component: Home, icon: { type: 'home', width: 27, height: 27 } },
  { name: 'Practices', component: Practices, icon: { type: 'practices', width: 32, height: 27 } },
  { name: 'Community', component: Community, icon: { type: 'community', width: 35, height: 23 } },
  { name: 'Timer Stats', component: TimerStats, icon: { type: 'stats', width: 29, height: 29 } },
];

export const APP_ROUTES = {
  start: {
    splash: 'Splash',
    signUp: 'Sign Up',
    signIn: 'Sign In',
    onBoard: ON_BOARD_ROUTES[0].name,
  },
  dashboard: 'Dashboard',
  immersions: 'Immersions',
  immersionTimer: 'Immersion Timer',

  practices: 'Practices',
};
