import { useSelector } from 'react-redux';

import { getBookmarks } from './../../services/store/auth/auth.selectors';

import { TViewProps } from '@typings/common';

export const useStateBookMarks = () => {
  const bookmarks = useSelector(getBookmarks);
  const sortedBookmarks = [...bookmarks].sort(
    (firstBookmark, secondBookmark) => Number(secondBookmark.created_at) - Number(firstBookmark.created_at),
  );
  const columnWrapperStyles: TViewProps = { paddingHorizontal: 15, justifyContent: 'space-between' };
  const isSortedBookmarks = sortedBookmarks.length === 0;
  return { sortedBookmarks, columnWrapperStyles, isSortedBookmarks };
};
