import { PICKER_DATA } from './modal-change-goal.constants';

export const getIndexByGoal = (dailyGoal: number) =>
  PICKER_DATA.findIndex(key => {
    return +key === dailyGoal;
  });

export const getGoalByIndex = (index: number) => PICKER_DATA[index]!;
