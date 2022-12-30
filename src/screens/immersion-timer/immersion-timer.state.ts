import { useEffect, useState } from 'react';
import TrackPlayer from 'react-native-track-player';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { secondsToMinutes } from 'date-fns';

import { clearRecentPractices } from './immersion-timer.utils';
import { databaseRef, updateUser } from '@services/api.service';
import { useOpenCloseModal } from '@services/hooks/open-close';
import { useAppDispatch, useAppSelector } from '@services/hooks/redux';
import { SetupPlayerService } from '@services/player/player-setup';
import { setCommentBeforeImmersion, setGradeBeforeImmersion } from '@services/store/app';
import { addFinishedPractic, addRecentPractice } from '@services/store/auth/auth.actions';
import { getLatestLibrary } from '@services/store/auth/auth.selectors';
import { getUserInfo } from '@services/store/auth/auth.selectors';
import { IFinishedPractices } from '@services/store/auth/auth.typings';

import { APP_ROUTES } from '@constants/routes';

export const useImmersionTimer = () => {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);

  const { navigate } = useNavigation();
  const { isOpen: isOpenAskModal, onClose: closeAskModal, onToggle: toggleOpenAskModal } = useOpenCloseModal();
  const { uid } = useSelector(getUserInfo);
  const { commentBeforeImmersion, gradeBeforeImmersion } = useAppSelector(store => store.app);
  const dispatch = useAppDispatch();
  const library = useSelector(getLatestLibrary);
  const { title, audioFile } = library;

  const isAudioFile = audioFile !== undefined;

  useEffect(() => {
    setUpPlayer();
  }, []);

  const setUpPlayer = async () => {
    if (!audioFile) {
      return;
    }

    const { audio, author, duration } = audioFile;

    const isSetup = await SetupPlayerService();
    setIsPlayerReady(isSetup);

    const queue = await TrackPlayer.getQueue();

    if (isSetup && queue.length <= 0) {
      await TrackPlayer.add({
        url: audio,
        title,
        artist: author,
        artwork: 'https://cdn.pixabay.com/photo/2022/07/15/14/14/mount-cook-7323246_1280.jpg',
        duration,
      });
    }
  };

  const onTextPress = (commentAfterImmersion: string, gradeAfterImmersion: number | null) => {
    const isAnyValueExists =
      commentBeforeImmersion || commentAfterImmersion || gradeBeforeImmersion || gradeAfterImmersion;

    if (isAnyValueExists) {
      return saveResponse(commentAfterImmersion, gradeAfterImmersion);
    }
    onModalClose();
  };

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
    const finishedPractice: IFinishedPractices = { title, created_at: fireBaseDate };

    dispatch(addFinishedPractic(finishedPractice));
    dispatch(addRecentPractice(finishedPractice));

    const updatedPractices = firestore.FieldValue.arrayUnion(finishedPractice) as unknown as IFinishedPractices[];
    await updateUser(uid, { finishedPractices: updatedPractices, recentPractices: updatedPractices });
  };

  const goToNextRoute = () => {
    closeAskModal();
    const addedTime = Math.round(secondsToMinutes(seconds));
    navigate(APP_ROUTES.immersionComplete as never, { addedTime } as never);
  };

  return {
    isOpenAskModal,
    saveResponse,
    library,
    toggleOpenAskModal,
    seconds,
    setSeconds,
    onTextPress,
    isPlayerReady,
    isAudioFile,
  };
};
