import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { isToday } from 'date-fns';

import { databaseRef, updateUser } from '@services/api.service';
import { getUniqueArray } from '@services/helpers/get-unique-array';
import { useGoal } from '@services/hooks/goal';
import { useParam } from '@services/hooks/param';
import { useAppDispatch } from '@services/hooks/redux';
import { getUserInfo } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

import { IAddedTime, IPracticeLibrary } from '@typings/common';

export const useImmersionComplete = () => {
  const { params } = useParam<IAddedTime>();
  const { navigate } = useNavigation();
  const user = useSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const { weeklyGoal } = useGoal();
  const [todayImmersions, setTodayImmersions] = useState<IPracticeLibrary[]>([]);

  const getTodayImmersions = async () => {
    const uniqueLibraries = getUniqueArray(user.finishedPractices, 'title');
    const todayLibraries = uniqueLibraries.filter(practice => isToday(practice.created_at.toDate()));

    const todayLibrariesTitles = todayLibraries
      .sort((a, b) => b.created_at.toDate().getTime() - a.created_at.toDate().getTime())
      .map(practice => practice.title);

    const allLibraries = await databaseRef('Practise library').where('title', 'in', todayLibrariesTitles).get();
    const librariesData = allLibraries.docs.map(lib => lib.data() as IPracticeLibrary);
    const sortedLibraries = todayLibrariesTitles.map(title => librariesData.find(lib => lib.title === title)!);

    setTodayImmersions(sortedLibraries);
  };

  useEffect(() => {
    getTodayImmersions();
  }, []);

  const onDone = async () => {
    const goal = user.goal! + params.addedTime;
    await updateUser(user.uid, { goal }, dispatch);
    navigate(APP_ROUTES.main.home as never);
  };

  return {
    weeklyGoal,
    goal: user.goal,
    addedTime: params.addedTime,
    todayImmersions,
    onDone,
  };
};
