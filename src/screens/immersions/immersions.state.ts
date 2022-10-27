import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { getRecentLibraries, sortLibraries } from './immersions.utils';
import { databaseRef } from '@services/api.service';
import { useSetDefaultTimer } from '@services/hooks/setDefaultTimer';
import * as action from '@services/store/auth/auth.actions';
import { getUserInfo } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

import { IPracticeLibrary } from '@typings/common';

export const useImmersions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const { defaultTimer } = useSetDefaultTimer('startTimer');

  const { recentPractices } = useSelector(getUserInfo);
  const recentLibrariesTitles = useMemo(() => getRecentLibraries(recentPractices), [recentPractices]);
  const [recentLibraries, setRecentLibraries] = useState<IPracticeLibrary[]>([]);
  const { navigate } = useNavigation();

  const getRecentLibrariesFromDB = useCallback(async () => {
    setIsLoading(true);
    const allLibraries = await databaseRef('Practise library').where('title', 'in', recentLibrariesTitles).get();
    const librariesData = allLibraries.docs.map(lib => lib.data() as IPracticeLibrary);

    const sortedLibraries = sortLibraries(recentLibrariesTitles, librariesData);

    setRecentLibraries(sortedLibraries);
    setIsLoading(false);
  }, [recentLibrariesTitles]);

  useEffect(() => {
    if (!recentLibrariesTitles.length) {
      return setIsLoading(false);
    }
    setRecentLibraries([]);
    getRecentLibrariesFromDB();
  }, [recentLibrariesTitles]);

  const onStartTimer = async () => {
    if (!recentLibraries.length) {
      return navigate(APP_ROUTES.practices as never);
    }

    defaultTimer();

    dispatch(action.addLatestLibrary(recentLibraries[0]));
    navigate(APP_ROUTES.immersionTimer as never);
  };

  return {
    recentLibraries,
    onStartTimer,
    isLoading,
  };
};
