import { QuestionsStart, Start, ThankYou, TimeForImmersion, WeeklyGoal, WhatBrings } from '@screens/onboarding';

export const ON_BOARD_ROUTES = [
  { name: 'start', component: Start },
  { name: 'questionsStart', component: QuestionsStart },
  { name: 'whatBrings', component: WhatBrings },
  { name: 'thankYou', component: ThankYou },
  { name: 'weeklyGoal', component: WeeklyGoal },
  { name: 'timeForImmersion', component: TimeForImmersion },
];

export const APP_ROUTES = {
  start: {
    splash: 'Splash',
    signUp: 'Sign Up',
    signIn: 'Sign In',
    onBoard: ON_BOARD_ROUTES[0].name,
  },
};
