import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { nextSaturday, previousSaturday } from 'date-fns';

import { getThisWeekMoons } from './mood-summary.utils';
import { commentsAPI } from '@services/comments/comments.api';
import { ICommentData } from '@services/comments/comments.typings';
import { getFormattedDateRange } from '@services/helpers/utils';
import { getUid } from '@services/store/auth/auth.selectors';

import { MAX_PAGES_COUNT } from './moods-summary.constants';

import { IMoonStat } from './mood-summary.typings';

export const useMoodSummary = () => {
  const [allComments, setAllComments] = useState<ICommentData[]>();
  const [moons, setMoons] = useState<IMoonStat[]>();
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [currentPage, setCurrentPage] = useState(MAX_PAGES_COUNT);
  const [currentWeekRange, setCurrentWeekRange] = useState(getFormattedDateRange(today));
  const uid = useSelector(getUid);

  useEffect(() => {
    const subscriber = commentsAPI.getRealTimeCommentsGroupedByDate({
      uid,
      weeksCount: MAX_PAGES_COUNT,
      callback: commentsData => {
        setAllComments(commentsData);
      },
    });

    return () => subscriber();
  }, []);

  const getMoons = (weekDate: Date) => {
    setCurrentDate(weekDate);

    if (!allComments?.length) {
      return;
    }

    const thisWeekMoons = getThisWeekMoons(allComments, weekDate);

    setMoons(thisWeekMoons);
  };

  const getPrevWeek = () => {
    setCurrentPage(prevPage => prevPage - 1);
    const previousWeekDate = previousSaturday(currentDate);
    setCurrentWeekRange(getFormattedDateRange(previousWeekDate));
    getMoons(previousWeekDate);
  };

  const getNextWeek = () => {
    setCurrentPage(prevPage => prevPage + 1);
    const nextWeekDate = nextSaturday(currentDate);
    setCurrentWeekRange(getFormattedDateRange(nextWeekDate));
    getMoons(nextWeekDate);
  };

  useEffect(() => {
    if (allComments?.length) {
      getMoons(currentDate);
    }
  }, [allComments]);

  return {
    moons,
    getPrevWeek,
    getNextWeek,
    currentPage,
    currentWeekRange,
  };
};
