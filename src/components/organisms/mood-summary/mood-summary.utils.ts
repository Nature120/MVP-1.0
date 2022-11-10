import {
  eachDayOfInterval,
  endOfWeek,
  format,
  getDay,
  isSameWeek,
  isSaturday,
  isSunday,
  nextSaturday,
  previousSunday,
  startOfWeek,
} from 'date-fns';

import { ICommentData } from '@services/comments/comments.typings';

import { IMoonStat } from './mood-summary.typings';

export const getAverage = (array: number[]) => Math.round(array.reduce((a, b) => a + b, 0) / array.length);

export const getFormattedDateRange = (weekDate: Date) => {
  const start = format(startOfWeek(weekDate), 'dd/MM');
  const end = format(endOfWeek(weekDate), 'dd/MM');

  return `${start} - ${end}`;
};

export const getThisWeekMoons = (allComments: ICommentData[], weekDate: Date) => {
  const thisWeekMoons = allComments.filter(moon => isSameWeek(weekDate, moon.date));

  const result = eachDayOfInterval({
    start: isSunday(weekDate) ? weekDate : previousSunday(weekDate),
    end: isSaturday(weekDate) ? weekDate : nextSaturday(weekDate),
  }).map(date => ({ date })) as IMoonStat[];

  thisWeekMoons.forEach(({ date, ...values }) => {
    const before = getAverage(values?.before || []);
    const after = getAverage(values?.after || []);
    result[getDay(date)] = { date, before, after };
  });

  return result;
};
