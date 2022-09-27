import { useCallback, useEffect, useState } from 'react';

import { getPracticesByCategories } from './practice-libraries-pagination.utils';

import { IPracticeLibrariesPaginationStateProps } from './practice-libraries-pagination.typings';
import { IPracticeLibrary, TDocument } from '@typings/common';

export const usePracticeLibrariesPagination = (props: IPracticeLibrariesPaginationStateProps) => {
  const { documentId, setLoading } = props;

  const [libraries, setLibraries] = useState<IPracticeLibrary[]>([]);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [lastPractice, setLastPractice] = useState<TDocument | null>();
  const [isEndReached, setIsEndReached] = useState(false);

  const fetchPracticesByCategory = useCallback(
    async (lastPracticeProps?: TDocument) => {
      try {
        const { practiceList, nextLastPractice } = await getPracticesByCategories(documentId, lastPracticeProps);
        setLibraries([...libraries, ...practiceList]);
        setLastPractice(nextLastPractice);
      } catch (error) {
        console.error(error);
      }
    },
    [lastPractice],
  );

  const firstFetch = async () => {
    await fetchPracticesByCategory();

    if (documentId && setLoading && typeof documentId === 'string') {
      setLoading((prev: { [key: string]: boolean }) => {
        return { ...prev, [documentId]: false };
      });
    }
  };

  const resetPractices = () => {
    setLastPractice(null);
    setLibraries([]);
  };

  useEffect(() => {
    resetPractices();
    firstFetch();
  }, []);

  const loadMoreData = async () => {
    if (lastPractice) {
      setIsMoreLoading(true);
      await fetchPracticesByCategory(lastPractice);
      setIsMoreLoading(false);
      setIsEndReached(true);
    }
  };

  const onEndReached = () => {
    if (!isEndReached && !isMoreLoading) {
      loadMoreData();
    }
  };

  const onMomentumScrollBegin = () => {
    setIsEndReached(false);
  };

  return {
    libraries,
    onEndReached,
    onMomentumScrollBegin,
  };
};
