import { useCallback, useEffect, useState } from 'react';

import { getPracticesByFilter } from './practice-libraries-pagination.utils';

import { IPracticeLibrariesPaginationStateProps } from './practice-libraries-pagination.typings';
import { IPracticeLibrary, TDocument } from '@typings/common';

export const usePracticeLibrariesPagination = (props: IPracticeLibrariesPaginationStateProps) => {
  const { documentId, setLoading, searchField } = props;

  const [libraries, setLibraries] = useState<IPracticeLibrary[]>([]);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [lastPractice, setLastPractice] = useState<TDocument | null>();
  const [isEndReached, setIsEndReached] = useState(false);

  const fetchPracticesByCategory = useCallback(
    async (lastPracticeDoc?: TDocument) => {
      try {
        const { practiceList, nextLastPractice } = await getPracticesByFilter({
          searchedDocs: documentId,
          lastPracticeDoc,
          searchField,
        });
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
      setLoading(prev => ({ ...prev, [documentId]: false }));
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
    if (!lastPractice) {
      return;
    }
    setIsMoreLoading(true);
    await fetchPracticesByCategory(lastPractice);
    setIsMoreLoading(false);
    setIsEndReached(true);
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
