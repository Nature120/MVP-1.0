import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

import { updateUser } from '@services/api.service';
import { useOpenCloseModal } from '@services/hooks/open-close';
import { useAppDispatch } from '@services/hooks/redux';
import { useSetDefaultTimer } from '@services/hooks/setDefaultTimer';
import { setCommentBeforeImmersion, setGradeBeforeImmersion } from '@services/store/app';
import * as action from '@services/store/auth/auth.actions';
import { getBookmarks, getUid } from '@services/store/auth/auth.selectors';
import { IBookmarks } from '@services/store/auth/auth.typings';

import { APP_ROUTES } from '@constants/routes';

import { IPracticeLibraryModalProps } from './practice-library-modal.typings';

export const usePracticeLibraryModal = (props: IPracticeLibraryModalProps) => {
  const [toggleBookMark, setToggleBookMark] = useState<boolean>(false);

  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  const { isOpen: isOpenAsk, onClose: closeModalAsk, onOpen: openModalAsk } = useOpenCloseModal();
  const { defaultTimer } = useSetDefaultTimer('startTimer');
  const uid = useSelector(getUid);
  const bookmarks = useSelector(getBookmarks);

  const { isWithoutActions, isWithoutAskModal, isOpen, closeModal, library } = props;
  const { title, subscription, audioFile } = library;

  const isSubscriptionPractice = subscription === 'Subscription';
  const isAudioFile = audioFile !== undefined;

  useEffect(() => {
    changeToggleInitState();
  }, [bookmarks]);

  const changeToggleInitState = () => {
    if (!bookmarks) {
      return;
    }
    const isBookMark = bookmarks.find(item => item.title === title);
    isBookMark ? setToggleBookMark(true) : setToggleBookMark(false);
  };

  const saveResponse = (value: string) => {
    const response = value.trim();
    dispatch(setCommentBeforeImmersion(response));
    navigateToTimer();
  };

  const onConfirmPress = (grade: number) => {
    dispatch(setGradeBeforeImmersion(grade));
  };

  const navigateToTimer = () => {
    closeModalAsk();
    closeModal();

    defaultTimer();
    dispatch(action.addLatestLibrary(library));
    navigate(APP_ROUTES.immersionTimer as never);
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

  return {
    isOpen,
    isWithoutActions,
    isWithoutAskModal,
    closeModal,
    isOpenAsk,
    closeModalAsk,
    saveResponse,
    navigateToTimer,
    openModalAsk,
    onConfirmPress,
    onToggleBookMark,
    toggleBookMark,
    isSubscriptionPractice,
    isAudioFile,
  };
};
