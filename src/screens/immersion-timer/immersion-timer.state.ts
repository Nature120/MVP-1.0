import { useState } from 'react';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { secondsToMinutes } from 'date-fns';

import { clearRecentPractices } from './immersion-timer.utils';
import { databaseRef, updateUser } from '@services/api.service';
import { useParam } from '@services/hooks/param';
import { useAppDispatch, useAppSelector } from '@services/hooks/redux';
import { setCommentBeforeImmersion } from '@services/store/app';
import { addFinishedPractic, addRecentPractice } from '@services/store/auth/auth.actions';
import { getUserInfo } from '@services/store/auth/auth.selectors';
import { IFinishedPractices } from '@services/store/auth/auth.typings';

import { APP_ROUTES } from '@constants/routes';

import { IPracticeLibrary } from '@typings/common';

export const useImmersionTimer = () => {
  const { navigate } = useNavigation();
  const { params: library } = useParam<IPracticeLibrary>();
  const [seconds, setSeconds] = useState<number>(0);
  const [isOpenAskModal, setIsOpenAskModal] = useState(false);
  const { uid } = useSelector(getUserInfo);
  const { commentBeforeImmersion } = useAppSelector(store => store.app);
  const dispatch = useAppDispatch();
  const { title } = library;

  const toggleOpenAskModal = () => setIsOpenAskModal(prev => !prev);

  const onModalClose = async () => {
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

    goToNextRoute();
  };

  const saveResponse = async (value: string) => {
    const commentAfterImmersion = value.trim();

    const newComment = {
      before: commentBeforeImmersion,
      after: commentAfterImmersion,
      practiceTitle: title,
    };

    await databaseRef('Users').doc(uid).collection('comments').doc(new Date().toString()).set(newComment);
    dispatch(setCommentBeforeImmersion(''));

    await onModalClose();
  };

  const savePractices = async () => {
    const fireBaseDate = firestore.Timestamp.fromDate(new Date());
    const finishedPractice: IFinishedPractices = { title, created_at: fireBaseDate };

    dispatch(addFinishedPractic(finishedPractice));
    dispatch(addRecentPractice(finishedPractice));

    const updatedPractices = firestore.FieldValue.arrayUnion(finishedPractice) as unknown as IFinishedPractices[];
    await updateUser(uid, { finishedPractices: updatedPractices, recentPractices: updatedPractices });
  };

  const goToNextRoute = () => {
    setIsOpenAskModal(false);
    const addedTime = Math.round(secondsToMinutes(seconds));
    navigate(APP_ROUTES.immersionComplete as never, { addedTime } as never);
  };

  return {
    isOpenAskModal,
    saveResponse,
    onModalClose,
    library,
    toggleOpenAskModal,
    seconds,
    setSeconds,
  };
};
