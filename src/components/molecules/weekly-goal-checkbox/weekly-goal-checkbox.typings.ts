export interface IWeeklyGoalCheckboxProps extends IWeeklyGoal {
  minPerDay: number;
  text: string;
  name: string;
  isChecked: boolean;
  onChange: (isChecked: boolean, name: string) => void;
}

export interface IWeeklyGoal {
  minPerDay: number;
  text: string;
}
