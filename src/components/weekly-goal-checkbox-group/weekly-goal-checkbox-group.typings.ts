import { IWeeklyGoal } from '@components/weekly-goal-checkbox/weekly-goal-checkbox.typings';

import { TStyles } from '@typings/common';

export interface IWeeklyGoalCheckboxGroupProps extends IWeeklyGroupStateProps {
  gap?: number;
  styles?: TStyles;
}

export interface IWeeklyGroupStateProps {
  variants: IWeeklyGoal[];
  onChange: (result: string) => void;
}

export interface IWeeklyGroupState {
  isChecked: boolean;
  minPerDay: number;
  name: string;
  text: string;
}
