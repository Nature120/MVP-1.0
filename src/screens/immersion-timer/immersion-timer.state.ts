import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { IPracticeLibrary } from '@components/practice-libraries/practice-library/practice-library.typings';

import { getUser, updateUser } from '@services/api.service';
import { useParam } from '@services/hooks/param';
import { useAppDispatch, useAppSelector } from '@services/hooks/redux';
import { setCommentBeforeImmersion } from '@services/store/app';
import { getUserInfo } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

const MOCK_ADDED_TIME = 34; //FIXME

export const useImmersionTimer = () => {
  const { navigate } = useNavigation();
  const { params: library } = useParam<IPracticeLibrary>();
  const [isDoNotDisturb, setIsDoNotDisturb] = useState(false);
  const [isOpenAskModal, setIsOpenAskModal] = useState(false);
  const user = useSelector(getUserInfo);
  const { commentBeforeImmersion } = useAppSelector(store => store.app);
  const dispatch = useAppDispatch();

  const toggleOpenAskModal = () => setIsOpenAskModal(prev => !prev);

  const saveResponse = async (value: string) => {
    const commentAfterImmersion = value.trim();
    const userInfo = await getUser(user.uid);

    if (!userInfo) {
      return;
    }

    const { comments } = userInfo;

    const newComment = {
      before: commentBeforeImmersion,
      after: commentAfterImmersion,
      date: new Date(),
    };

    await updateUser(user.uid, { comments: [...comments!, newComment] });
    dispatch(setCommentBeforeImmersion(''));
    goToNextRoute();
  };

  const goToNextRoute = () => {
    setIsOpenAskModal(false);
    navigate(APP_ROUTES.immersionComplete as never, { addedTime: MOCK_ADDED_TIME } as never);
  };

  return {
    isOpenAskModal,
    saveResponse,
    goToNextRoute,
    library,
    isDoNotDisturb,
    setIsDoNotDisturb,
    toggleOpenAskModal,
  };
};
