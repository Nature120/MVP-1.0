import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isToday as checkIsToday } from 'date-fns';

import { databaseRef, updateUser } from '@services/api.service';
import { getUserInfo } from '@services/store/auth/auth.selectors';

import { IUserTipOfTheDay } from '@typings/common';
import { ITipOfTheDay } from '@typings/common';

export const useTipOfTheDay = (userTipOfTheDay?: IUserTipOfTheDay) => {
  const [tipOfTheDayState, setTipOfTheDayState] = useState<ITipOfTheDay>();
  const { uid } = useSelector(getUserInfo);

  const getTipFromDatabase = async (tipIndex: number) => {
    const response = await databaseRef('Other text').doc('Tip of the day').get();
    const allTips = response.data()!.data as ITipOfTheDay[];
    const tip = allTips[tipIndex];
    setTipOfTheDayState(tip);

    const tipOfTheDay = {
      timestamp: new Date(new Date().setHours(0, 0, 0, 0)).getTime(),
      tip,
      tipIndex,
    };

    await updateUser(uid, { tipOfTheDay });
  };

  const getTipOfTheDay = async () => {
    if (!userTipOfTheDay) {
      return getTipFromDatabase(0);
    }

    const isToday = checkIsToday(userTipOfTheDay.timestamp);

    if (isToday) {
      return setTipOfTheDayState(userTipOfTheDay.tip);
    }
    getTipFromDatabase(userTipOfTheDay.tipIndex + 1);
  };

  useEffect(() => {
    getTipOfTheDay();
  }, []);

  return { tipOfTheDayState };
};
