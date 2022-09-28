import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isToday as checkIsToday } from 'date-fns';

import { databaseRef, updateUser, userInstance } from '@services/api.service';
import { getUserInfo } from '@services/store/auth/auth.selectors';
import { IUser } from '@services/store/auth/auth.typings';

import { ITipOfTheDay } from '@typings/common';

export const useTipOfTheDay = () => {
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
    const user = await userInstance(uid).get();
    const { tipOfTheDay } = user.data() as IUser;

    if (!tipOfTheDay) {
      return getTipFromDatabase(0);
    }

    const isToday = checkIsToday(tipOfTheDay.timestamp);

    if (isToday) {
      return setTipOfTheDayState(tipOfTheDay.tip);
    }
    getTipFromDatabase(tipOfTheDay.tipIndex + 1);
  };

  useEffect(() => {
    getTipOfTheDay();
  }, []);

  return { tipOfTheDayState };
};
