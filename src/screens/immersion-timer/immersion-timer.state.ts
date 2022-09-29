import { useState } from 'react';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { secondsToMinutes } from 'date-fns';

import { clearRecentPractices } from './immersion-timer.utils';
import { getUser, updateUser } from '@services/api.service';
import { useParam } from '@services/hooks/param';
import { useAppDispatch, useAppSelector } from '@services/hooks/redux';
import { setCommentBeforeImmersion } from '@services/store/app';
import { addFinishedPractic, addRecentPractice } from '@services/store/auth/auth.actions';
import { getUserInfo } from '@services/store/auth/auth.selectors';
import { IActionAddPractic } from '@services/store/auth/auth.typings';

import { APP_ROUTES } from '@constants/routes';

import { IPracticeLibrary } from '@typings/common';

export const useImmersionTimer = () => {
  const { navigate } = useNavigation();
  const { params: library } = useParam<IPracticeLibrary>();
  const [seconds, setSeconds] = useState<number>(0);
  const [isDoNotDisturb, setIsDoNotDisturb] = useState(false);
  const [isOpenAskModal, setIsOpenAskModal] = useState(false);
  const { uid } = useSelector(getUserInfo);
  const { commentBeforeImmersion } = useAppSelector(store => store.app);
  const dispatch = useAppDispatch();
  const { title } = library;

  const toggleOpenAskModal = () => setIsOpenAskModal(prev => !prev);

  const saveResponse = async (value: string) => {
    const commentAfterImmersion = value.trim();
    const userInfo = await getUser(uid);

    if (!userInfo) {
      return;
    }

    const { comments, recentPractices } = userInfo;

    const newComment = {
      before: commentBeforeImmersion,
      after: commentAfterImmersion,
      date: new Date(),
    };

    await updateUser(uid, { comments: [...comments!, newComment] });
    dispatch(setCommentBeforeImmersion(''));
    goToNextRoute(recentPractices);
  };

  const savePractices = async () => {
    const date = new Date();

    const finishedPractice: IActionAddPractic = { title, created_at: date };

    dispatch(addFinishedPractic(finishedPractice));
    dispatch(addRecentPractice(finishedPractice));

    const updatedPractices = firestore.FieldValue.arrayUnion(finishedPractice) as unknown as IActionAddPractic[];
    updateUser(uid, { finishedPractices: updatedPractices, recentPractices: updatedPractices });
  };

  const goToNextRoute = (userRecentPractices?: IActionAddPractic[]) => {
    try {
      clearRecentPractices(uid, title, userRecentPractices);
    } catch (e) {
      console.error('Cannot clear recent immersions:', e);
    }

    try {
      savePractices();
    } catch (e) {
      console.error('Cannot save practices:', e);
    }

    setIsOpenAskModal(false);
    const addedTime = Math.round(secondsToMinutes(seconds));
    navigate(APP_ROUTES.immersionComplete as never, { addedTime } as never);
  };

  return {
    isOpenAskModal,
    saveResponse,
    goToNextRoute,
    library,
    isDoNotDisturb,
    setIsDoNotDisturb,
    toggleOpenAskModal,
    seconds,
    setSeconds,
  };
};
