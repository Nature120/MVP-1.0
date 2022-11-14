import { endOfWeek, format, startOfWeek } from 'date-fns';

import { TIME_HASH_MAP } from '@components/organisms/time-picker/time-picker.constants';
import { TPeriod } from '@components/organisms/time-picker/time-picker.typings';

export const getMinMaxDate = (period: TPeriod) => {
  const d = new Date().getDate();
  const m = new Date().getMonth();
  const y = new Date().getFullYear();
  const { max, min } = TIME_HASH_MAP[period];

  return {
    minimumDate: new Date(new Date(y, m, d, min)),
    maximumDate: new Date(new Date(y, m, d, max)),
  };
};

export const getFormattedDateRange = (weekDate: Date, dateFormat = 'MMM d') => {
  const start = format(startOfWeek(weekDate), dateFormat);
  const end = format(endOfWeek(weekDate), dateFormat);

  return `${start} - ${end}`;
};
