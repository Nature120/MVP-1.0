import { useEffect, useState } from 'react';
import {
  eachDayOfInterval,
  getDay,
  isSameWeek,
  isSaturday,
  isSunday,
  nextSaturday,
  previousSaturday,
  previousSunday,
} from 'date-fns';

import { getAverage, getFormattedDateRange } from './mood-summary.utils';

import { INPUT_DATA, MAX_PAGES_COUNT } from './moods-summary.constants';

import { IMoonStat, IResponseMoon } from './mood-summary.typings';

export const useMoodSummary = () => {
  const [allMoons, setAllMoons] = useState<IResponseMoon[]>();
  const [moons, setMoons] = useState<IMoonStat[]>();
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [currentPage, setCurrentPage] = useState(MAX_PAGES_COUNT);
  const [currentWeekRange, setCurrentWeekRange] = useState(getFormattedDateRange(today));

  const getAllMoons = async () => {
    //TODO request
    setAllMoons(INPUT_DATA);
  };

  const getMoons = (weekDate: Date) => {
    if (!allMoons?.length) {
      return;
    }

    const thisWeekMoons = allMoons.filter(moon => isSameWeek(weekDate, moon.date));

    const result = eachDayOfInterval({
      start: isSunday(weekDate) ? weekDate : previousSunday(weekDate),
      end: isSaturday(weekDate) ? weekDate : nextSaturday(weekDate),
    }).map(date => ({ date })) as IMoonStat[];

    thisWeekMoons.forEach(({ date, ...values }) => {
      const [before, after] = [getAverage(values?.before || []), getAverage(values?.after || [])];
      result[getDay(date)] = { date, before, after };
    });

    setCurrentDate(weekDate);
    setMoons(result);
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
    getAllMoons();
  }, []);

  useEffect(() => {
    if (allMoons?.length) {
      getMoons(currentDate);
    }
  }, [allMoons]);

  return {
    moons,
    getPrevWeek,
    getNextWeek,
    currentPage,
    currentWeekRange,
  };
};
