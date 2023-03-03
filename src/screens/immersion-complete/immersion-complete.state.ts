import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { isToday } from 'date-fns';

import { databaseRef, updateUser } from '@services/api.service';
import { getUniqueArray } from '@services/helpers/array.utils';
import { useGoal } from '@services/hooks/goal';
import { useParam } from '@services/hooks/param';
import { useAppDispatch } from '@services/hooks/redux';
import { useSetDefaultTimer } from '@services/hooks/setDefaultTimer';
import { loading } from '@services/store/auth/auth.actions';
import { getLoading, getUserInfo } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

import { IAddedTime } from '@typings/common';

export const useImmersionComplete = () => {
  const { params } = useParam<IAddedTime>();
  const { navigate } = useNavigation();
  const user = useSelector(getUserInfo);
  const isLoading = useSelector(getLoading);
  const dispatch = useAppDispatch();
  const { weeklyGoal } = useGoal();
  const [todayImmersions, setTodayImmersions] = useState<any>([]);

  const { defaultTimer } = useSetDefaultTimer('done');

  const getTodayImmersions = async () => {
    const batches = [];

    const uniqueLibraries = getUniqueArray(user.finishedPractices, 'title');
    const todayLibraries = uniqueLibraries.filter(practice => isToday(practice.created_at.toDate()));

    const todayLibrariesTitles = todayLibraries
      .sort((a, b) => b.created_at.toDate().getTime() - a.created_at.toDate().getTime())
      .map(practice => practice.title);

    const arrayTodayLibrariesTitles = [...todayLibrariesTitles];

    while (arrayTodayLibrariesTitles.length) {
      // firestore limits batches to 10
      const batch = arrayTodayLibrariesTitles.splice(0, 10);

      // add the batch request to to a queue
      batches.push(
        databaseRef('Practise library')
          .where('title', 'in', batch)
          .get()
          .then(libs => libs.docs.map(result => result.data())),
      );
    }
    try {
      const data = await Promise.all(batches);
      const flatData = data.flat();
      const sortedLibraries = todayLibrariesTitles.map(title => flatData.find(lib => lib.title === title)!);
      setTodayImmersions(sortedLibraries);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getTodayImmersions();
  }, []);

  const onDone = async () => {
    //Turn on loading screen
    dispatch(loading(true));

    defaultTimer();

    const goal = user.goal! + params.addedTime;
    await updateUser(user.uid, { goal }, dispatch);

    //Turn off loading screen
    dispatch(loading(false));
    navigate(APP_ROUTES.main.home as never);
  };

  return {
    weeklyGoal,
    goal: user.goal,
    addedTime: params.addedTime,
    todayImmersions,
    onDone,
    isLoading,
  };
};
