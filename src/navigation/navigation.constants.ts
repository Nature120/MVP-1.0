import { QuestionsStart, Start, ThankYou, TimeForImmersion, WeeklyGoal, WhatBrings } from '@screens/onboarding';

import { IOnboardingRoutes } from './navigation.typings';

export const ON_BOARD_ROUTES: IOnboardingRoutes[] = [
  { name: 'start', component: Start },
  { name: 'questionsStart', component: QuestionsStart },
  { name: 'whatBrings', component: WhatBrings },
  { name: 'thankYou', component: ThankYou },
  { name: 'weeklyGoal', component: WeeklyGoal },
  { name: 'timeForImmersion', component: TimeForImmersion },
];
