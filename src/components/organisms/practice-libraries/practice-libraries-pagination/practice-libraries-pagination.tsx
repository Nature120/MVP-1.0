import React from 'react';

import { PracticeLibraries } from '../practice-libraries';
import { usePracticeLibrariesPagination } from './practice-libraries-pagination.state';

import { IPracticeLibrariesPaginationProps } from './practice-libraries-pagination.typings';

export const PracticeLibrariesPagination: React.FC<IPracticeLibrariesPaginationProps> = props => {
  const { title, isWithoutAskModal } = props;
  const { libraries, onEndReached, onMomentumScrollBegin } = usePracticeLibrariesPagination(props);

  return (
    <PracticeLibraries
      title={title}
      libraries={libraries}
      onEndReached={onEndReached}
      onMomentumScrollBegin={onMomentumScrollBegin}
      isWithoutAskModal={isWithoutAskModal}
    />
  );
};
