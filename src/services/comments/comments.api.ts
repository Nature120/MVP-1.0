import firestore from '@react-native-firebase/firestore';
import { startOfWeek } from 'date-fns';

import { groupByDate } from './comments.utils';

import { ICommentResponse, IFullCommentData, IRealTimeCommentsProps } from './comments.typings';

const commentsRef = (uid: string) => firestore().collection('Users').doc(uid).collection('comments');

export const commentsAPI = {
  getRealTimeCommentsGroupedByDate: ({ uid, callback, weeksCount }: IRealTimeCommentsProps) => {
    const firstWeekDate = new Date();
    firstWeekDate.setDate(firstWeekDate.getDate() - 7 * weeksCount);
    const startWeekDate = startOfWeek(firstWeekDate).getTime();

    return commentsRef(uid)
      .where('date', '>=', startWeekDate)
      .onSnapshot(querySnapshot => {
        const comments: IFullCommentData[] = querySnapshot.docs.map(documentSnapshot => {
          const data = documentSnapshot.data() as ICommentResponse;
          return { ...data, date: new Date(data.date) };
        });

        const commentsByDate = groupByDate(comments);

        callback(commentsByDate);
      });
  },
};
