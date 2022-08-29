import { ITextCheckBox } from '@components/text-checkbox/text-checkbox.typings';
import { IWeeklyGoal } from '@components/weekly-goal-checkbox/weekly-goal-checkbox.typings';

export const weeklyGoalVariants: IWeeklyGoal[] = [
  { text: 'MINIMUM 120 MINUTES PER WEEK', minPerDay: 17 },
  { text: 'IDEAL 200 MINUTES PER WEEK', minPerDay: 32 },
  { text: 'OPTIMAL 300 MINUTES PER WEEK', minPerDay: 44 },
];

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
