import { format } from 'date-fns';

import { DYNAMIC_HEADER_TEXTS } from './dynamic-header.constants';

export const getHeader = (goal: number, weeklyGoal: number) => {
  const goalPercent = (goal * 100) / weeklyGoal;

  if (goalPercent > 200) {
    return DYNAMIC_HEADER_TEXTS.biggerThan200;
  }
  if (goalPercent > 100) {
    return DYNAMIC_HEADER_TEXTS.biggerThan100;
  }

  const currentWeekDay = format(new Date(), 'EEEE');
  switch (currentWeekDay) {
    case 'Thursday':
      return DYNAMIC_HEADER_TEXTS[goalPercent < 50 ? 'thursdayAndLessThan50' : 'thursdayAndMoreThan50'];

    case 'Friday':
      return DYNAMIC_HEADER_TEXTS[goalPercent < 50 ? 'fridayAndLessThan50' : 'fridayAndMoreThan50'];

    case 'Saturday':
      return DYNAMIC_HEADER_TEXTS[goalPercent < 50 ? 'saturdayAndLessThan50' : 'saturdayAndMoreThan50'];

    default:
      return DYNAMIC_HEADER_TEXTS.default;
  }
};
