import { ITextCheckBox } from '@components/molecules/text-checkbox/text-checkbox.typings';
import { IWeeklyGoal } from '@components/molecules/weekly-goal-checkbox/weekly-goal-checkbox.typings';

import { TDailyGoal } from '@typings/common';

const range = (start: number, stop: number, step = 1): number[] =>
  Array(Math.ceil((stop + 1 - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

export const ONBOARDING_GOAL_HASH_MAP = {
  17: 120,
  29: 200,
  43: 300,
} as const;

const min = ONBOARDING_GOAL_HASH_MAP[+Object.keys(ONBOARDING_GOAL_HASH_MAP)[0] as TDailyGoal];
const max = min * 6;
const interval = 20;

export const GOAL_HASH_MAP = () => {
  const weeklyArr = range(min, max, interval);
  const res: { [x: number]: number } = {};
  weeklyArr.map(weekly => (res[Math.round(weekly / 7)] = weekly));
  return res;
};

const words = ['MINIMUM', 'IDEAL', 'OPTIMAL'];

export const weeklyGoalVariants: IWeeklyGoal[] = Object.keys(ONBOARDING_GOAL_HASH_MAP).map((dailyGoal, index) => ({
  text: `${words[index]} ${ONBOARDING_GOAL_HASH_MAP[+dailyGoal as TDailyGoal]} MINUTES PER WEEK`,
  minPerDay: +dailyGoal,
}));

export const timeForImmersionVariants: ITextCheckBox[] = [
  { text: 'IN THE MORNING', value: 'IN THE MORNING', icon: 'onBoardingSun', iconSize: { height: 22, width: 44 } },
  { text: 'AT LUNCH', value: 'AT LUNCH', icon: 'onBoardingApple', iconSize: { height: 26, width: 22 } },
  { text: 'AFTER WORK', value: 'AFTER WORK', icon: 'onBoardingMoon', iconSize: { height: 25, width: 22 } },
];
