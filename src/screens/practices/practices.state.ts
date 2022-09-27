import { useEffect, useState } from 'react';

import { addTOTDToDB } from '@components/test';

import { databaseRef } from '@services/api.service';

export const usePractices = () => {
  const [topCategories, setTopCategories] = useState<string[]>([]);
  const [loadingState, setLoadingState] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState(true);

  const getLoadingState = (allCategoriesData: string[]) => {
    const loadingEntries = allCategoriesData.map(category => [category, true]);
    const loadingInitialState = Object.fromEntries(loadingEntries);
    setLoadingState(loadingInitialState);
  };

  useEffect(() => {
    const getLibraries = async () => {
      const allCategories = await databaseRef('Other text').doc('Top Categories').get();
      const allCategoriesData = allCategories.data()!.topCategories as string[];

      getLoadingState(allCategoriesData);
      setTopCategories(allCategoriesData);
    };
    getLibraries();
  }, []);

  useEffect(() => {
    if (!Object.keys(loadingState).length) {
      return;
    }
    const loadingCount = Object.keys(loadingState).filter(key => Boolean(loadingState[key])).length;
    const isFetching = loadingCount !== 0;
    setIsLoading(isFetching);
  }, [loadingState]);

  return {
    topCategories,
    setLoadingState,
    isLoading,
  };
};
