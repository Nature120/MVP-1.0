import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';

import { updateUser } from '@services/api.service';
import { useAppDispatch } from '@services/hooks/redux';
import * as action from '@services/store/auth/auth.actions';
import { getBookmarks, getUid } from '@services/store/auth/auth.selectors';
import { IBookmarks } from '@services/store/auth/auth.typings';

import { IPracticeLibrary } from '@typings/common';

export const useLeafButtonState = (library: IPracticeLibrary) => {
  const [toggleBookMark, setToggleBookMark] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const uid = useSelector(getUid);
  const bookmarks = useSelector(getBookmarks);
  const { title } = library;

  useEffect(() => {
    changeToggleInitState();
  }, [bookmarks, library]);

  const changeToggleInitState = () => {
    if (!bookmarks || !title) {
      return;
    }
    const isBookMark = bookmarks.find(item => item.title === title);
    isBookMark ? setToggleBookMark(true) : setToggleBookMark(false);
  };

  const onToggleBookMark = () => {
    setToggleBookMark(!toggleBookMark);
    bookMarkOperations();
  };

  const bookMarkOperations = async () => {
    const fireBaseDate = firestore.Timestamp.fromDate(new Date());
    const bookmark: IBookmarks = { ...library, created_at: fireBaseDate };
    ///toggleBookMark is change on true after one toggle in this function
    if (!toggleBookMark) {
      dispatch(action.addBookmarks(bookmark));
      const addBookMarkFirebase = firestore.FieldValue.arrayUnion(bookmark) as unknown as IBookmarks[];
      await updateUser(uid, { bookmarks: addBookMarkFirebase });
      return;
    } else {
      const filteredBookmarks = bookmarks.filter(item => item.title !== title);
      dispatch(action.removeBookmarks(title));
      await updateUser(uid, { bookmarks: filteredBookmarks });
    }
  };
  return { onToggleBookMark, toggleBookMark };
};
