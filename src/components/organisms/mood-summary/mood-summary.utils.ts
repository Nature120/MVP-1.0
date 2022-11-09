import { endOfWeek, format, startOfWeek } from 'date-fns';

export const getAverage = (array: number[]) => Math.round(array.reduce((a, b) => a + b, 0) / array.length);

export const getFormattedDateRange = (date: Date) => {
  const start = format(startOfWeek(date), 'dd/MM');
  const end = format(endOfWeek(date), 'dd/MM');

  return `${start} - ${end}`;
};
