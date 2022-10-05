import { isFriday, isSaturday, isSunday } from 'date-fns';

import { DYNAMIC_HEADER_TEXTS } from './dynamic-header.constants';

export const getHeader = (goal: number, weeklyGoal: number) => {
  const goalPercent = (goal * 100) / weeklyGoal;
  const today = new Date();

  if (goalPercent < 50 && isFriday(today)) {
    return DYNAMIC_HEADER_TEXTS.fridayAndLessThan50;
  }
  if (goalPercent < 50 && isSaturday(today)) {
    return DYNAMIC_HEADER_TEXTS.saturdayAndLessThan50;
  }
  if (goalPercent < 50 && isSunday(today)) {
    return DYNAMIC_HEADER_TEXTS.sundayAndLessThan50;
  }
  if (goalPercent > 200) {
    return DYNAMIC_HEADER_TEXTS.biggerThan200;
  }
  if (goalPercent > 100) {
    return DYNAMIC_HEADER_TEXTS.biggerThan100;
  }
  return DYNAMIC_HEADER_TEXTS.default;
};
