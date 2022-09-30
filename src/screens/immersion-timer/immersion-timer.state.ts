import { useState } from 'react';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { secondsToMinutes } from 'date-fns';

import { getUser, updateUser } from '@services/api.service';
import { useParam } from '@services/hooks/param';
import { useAppDispatch, useAppSelector } from '@services/hooks/redux';
import { setCommentBeforeImmersion } from '@services/store/app';
import { addFinishedPractic } from '@services/store/auth/auth.actions';
import { getUserInfo } from '@services/store/auth/auth.selectors';

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

    const { comments } = userInfo;

    const newComment = {
      before: commentBeforeImmersion,
      after: commentAfterImmersion,
      date: new Date(),
    };

    await updateUser(uid, { comments: [...comments!, newComment] });
    dispatch(setCommentBeforeImmersion(''));
    goToNextRoute();
  };

  const goToNextRoute = () => {
    savePractic();

    setIsOpenAskModal(false);
    const addedTime = Math.round(secondsToMinutes(seconds));
    navigate(APP_ROUTES.immersionComplete as never, { addedTime } as never);
  };

  const savePractic = () => {
    const fireBaseDate = firestore.Timestamp.fromDate(new Date());

    dispatch(addFinishedPractic({ title, created_at: fireBaseDate }));

    firestore()
      .collection('Users')
      .doc(uid)
      .update({
        finishedPractices: firestore.FieldValue.arrayUnion({ title, created_at: fireBaseDate }),
      });
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
