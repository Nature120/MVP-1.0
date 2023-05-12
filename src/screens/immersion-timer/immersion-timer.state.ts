import { useEffect, useState } from 'react';
import TrackPlayer from 'react-native-track-player';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { ITeacher } from './../../typings/common.d';

import { getRoundElapsedTime } from './immersion-timer.utils';
import { useOpenCloseModal } from '@services/hooks/open-close';
import { useTeacherHook } from '@services/hooks/teacherHook';
import { SetupPlayerService } from '@services/player/player-setup';
import { getLatestLibrary, getLoading } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

export const useImmersionTimer = () => {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);

  const { navigate } = useNavigation();
  const { isOpen: isOpenAskModal, onToggle: toggleOpenAskModal } = useOpenCloseModal();

  const isLoading = useSelector(getLoading);
  const library = useSelector(getLatestLibrary);
  const { title, audioFile, image, audioDuration, teacher: teacherName } = library;

  const { teacher } = useTeacherHook(teacherName);

  const isAudioFile = audioFile !== undefined;
  const elapsedTime = getRoundElapsedTime(seconds);

  useEffect(() => {
    setUpPlayer();
  }, []);

  const setUpPlayer = async () => {
    if (!audioFile || !teacher) {
      return;
    }

    const { fullName } = teacher as ITeacher;

    const isSetup = await SetupPlayerService();
    setIsPlayerReady(isSetup);

    const queue = await TrackPlayer.getQueue();

    if (isSetup && queue.length <= 0) {
      await TrackPlayer.add({
        url: audioFile,
        title,
        artist: fullName,
        artwork: image,
        duration: audioDuration,
      });
    }
  };

  const goToNextRoute = () => {
    toggleOpenAskModal();
    navigate(APP_ROUTES.immersionChange as never, { addedTime: elapsedTime } as never);
  };

  return {
    isOpenAskModal,
    library,
    toggleOpenAskModal,
    goToNextRoute,
    seconds,
    setSeconds,
    isPlayerReady,
    isAudioFile,
    teacher,
    isLoading,
  };
};
