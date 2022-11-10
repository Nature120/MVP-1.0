import { format } from 'date-fns';

import { ICommentData, IFullCommentData, IUnformattedCommentData } from './comments.typings';

export const groupByDate = (array: IFullCommentData[]) => {
  const unformattedComments = array.reduce((acc, { after, before, date }) => {
    const dateKey = format(date, 'dd/MM/yyyy');
    const data: ICommentData = acc[dateKey] || { date, before: [], after: [] };
    after.grade && data.after.push(after.grade);
    before.grade && data.before.push(before.grade);

    acc[dateKey] = data;

    return acc;
  }, {} as IUnformattedCommentData);

  return Object.values(unformattedComments);
};
