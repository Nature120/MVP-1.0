import { ITextCheckBox } from '@components/text-checkbox/text-checkbox.typings';
import { IWeeklyGoal } from '@components/weekly-goal-checkbox/weekly-goal-checkbox.typings';

import { TDailyGoal } from '@typings/common';

export const GOAL_HASH_MAP = {
  17: 120,
  28: 200,
  43: 300,
} as const;

const words = ['MINIMUM', 'IDEAL', 'OPTIMAL'];

export const weeklyGoalVariants: IWeeklyGoal[] = Object.keys(GOAL_HASH_MAP).map((dailyGoal, index) => ({
  text: `${words[index]} ${GOAL_HASH_MAP[+dailyGoal as TDailyGoal]} MINUTES PER WEEK`,
  minPerDay: +dailyGoal,
}));

export const timeForImmersionVariants: ITextCheckBox[] = [
  { text: 'IN THE MORNING', icon: 'onBoardingSun', iconSize: { height: 22, width: 44 } },
  { text: 'AT LUNCH', icon: 'onBoardingApple', iconSize: { height: 26, width: 22 } },
  { text: 'AFTER WORK', icon: 'onBoardingMoon', iconSize: { height: 25, width: 22 } },
];

export const whatBringsVariants: ITextCheckBox[] = [
  { text: 'BOOST MOOD' },
  { text: 'CALM ANXIETY' },
  { text: 'MENTAL WELLBEING' },
  { text: 'PHYSICAL HEALTH' },
  { text: 'RECONNECT WITH NATURE' },
  { text: 'SELF CARE' },
];
