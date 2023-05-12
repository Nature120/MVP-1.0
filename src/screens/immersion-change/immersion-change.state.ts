import { useState } from 'react';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

import { clearRecentPractices } from '../immersion-timer/immersion-timer.utils';
import { databaseRef, updateUser } from '@services/api.service';
import { useGoal } from '@services/hooks/goal';
import { useOpenCloseModal } from '@services/hooks/open-close';
import { useParam } from '@services/hooks/param';
import { useAppDispatch, useAppSelector } from '@services/hooks/redux';
import { setCommentBeforeImmersion, setGradeBeforeImmersion } from '@services/store/app';
import { addFinishedPractic, addRecentPractice, loading } from '@services/store/auth/auth.actions';
import { getLatestLibrary, getLoading, getUserInfo } from '@services/store/auth/auth.selectors';
import { IFinishedPractices } from '@services/store/auth/auth.typings';

import { APP_ROUTES } from '@constants/routes';

import { IAddedTime } from '@typings/common';

export const useImmersionChange = () => {
  const { params } = useParam<IAddedTime>();
  const { navigate } = useNavigation();
  const isLoading = useSelector(getLoading);
  const { weeklyGoal } = useGoal();

  const [immersion, setImmersion] = useState(params.addedTime);

  const onDone = async () => {
    navigate(APP_ROUTES.immersionComplete as never, { addedTime: immersion } as never);
  };

  const onDelete = () => {
    navigate(APP_ROUTES.main.home as never);
  };
  const { uid } = useSelector(getUserInfo);
  const { commentBeforeImmersion, gradeBeforeImmersion } = useAppSelector(store => store.app);
  const dispatch = useAppDispatch();

  const library = useSelector(getLatestLibrary);
  const { title } = library;

  const { isOpen: isOpenAskModal, onClose: closeAskModal, onToggle: toggleOpenAskModal } = useOpenCloseModal();
  const onTextPress = (commentAfterImmersion: string, gradeAfterImmersion: number | null) => {
    const isAnyValueExists =
      commentBeforeImmersion || commentAfterImmersion || gradeBeforeImmersion || gradeAfterImmersion;

    if (isAnyValueExists) {
      return saveResponse(commentAfterImmersion, gradeAfterImmersion);
    }
    onModalClose();
  };

  const onModalClose = async () => {
    //Switch on loading screen on fetch
    dispatch(loading(true));
    try {
      await clearRecentPractices(uid, title);
    } catch (e) {
      console.error('Cannot clear recent immersions:', e);
    }
    try {
      await savePractices();
    } catch (e) {
      console.error('Cannot save practices:', e);
    }
    closeAskModal();
    //Switch off loading screen on fetch
    dispatch(loading(false));
    onDone();
  };

  const saveResponse = async (comment: string, gradeAfterImmersion: number | null) => {
    const commentAfterImmersion = comment?.trim();
    const date = new Date().toString();
    const newComment = {
      before: {
        comment: commentBeforeImmersion,
        grade: gradeBeforeImmersion,
      },
      after: {
        comment: commentAfterImmersion,
        grade: gradeAfterImmersion,
      },
      practiceTitle: title,
      date: new Date().getTime(),
    };

    await databaseRef('Users').doc(uid).collection('comments').doc(date).set(newComment);
    dispatch(setCommentBeforeImmersion(''));
    dispatch(setGradeBeforeImmersion(null));

    await onModalClose();
  };

  const savePractices = async () => {
    const fireBaseDate = firestore.Timestamp.fromDate(new Date());
    const finishedPractice: IFinishedPractices = { title, created_at: fireBaseDate, elapsedTime: immersion };
    dispatch(addFinishedPractic(finishedPractice));
    dispatch(addRecentPractice(finishedPractice));
    const updatedPractices = firestore.FieldValue.arrayUnion(finishedPractice) as unknown as IFinishedPractices[];
    await updateUser(uid, { finishedPractices: updatedPractices, recentPractices: updatedPractices });
  };
  return {
    isLoading,
    weeklyGoal,
    immersion,
    isOpenAskModal,
    toggleOpenAskModal,
    onDone,
    onDelete,
    setImmersion,
    onTextPress,
    saveResponse,
  };
};
