import React from 'react';
import { moderateScale } from 'react-native-size-matters';

import { Loader } from '@components/atoms/loader/loader';
import { AskModal } from '@components/molecules/ask-modal';
import { Layout } from '@components/molecules/layout';
import { Swiper } from '@components/molecules/swiper/swiper';
import { TogglerDoNotDisturb } from '@components/molecules/toggler-do-not-disturb';
import { PracticeLibraryCollapsed } from '@components/organisms/practice-libraries/practice-library-collapsed';
import { TimerProgressBar } from '@components/organisms/timer-progress-bar/timer-progress-bar';
import { useImmersionTimer } from './immersion-timer.state';
import { MediaPlayerSheet } from './media-player-sheet/media-player-sheet';

import { isIOS } from '@services/helpers/device-utils';

import { PlayerContext } from './immersion-timer.constants';

import { IAudioFile } from '@typings/common';

import { ImmersionTimerStyled as Styled } from './immersion-timer.styles';

export const ImmersionTimer: React.FC = () => {
  const {
    isOpenAskModal,
    saveResponse,
    library,
    toggleOpenAskModal,
    seconds,
    setSeconds,
    onTextPress,
    isPlayerReady,
    isAudioFile,
    teacher,
    isLoading,
  } = useImmersionTimer();

  const { audioFile, audioDuration, ...practiceInfo } = library;
  const audioObjectInfo = { audioFile, teacher, audioDuration } as IAudioFile;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <PlayerContext.Provider value={{ isPlayerReady, isAudioFile }}>
          <Layout isWithGradient ellipseColor="light-green" isWithScroll isWithoutMargin>
            <AskModal
              isVisible={isOpenAskModal}
              onClose={toggleOpenAskModal}
              onButtonPress={saveResponse}
              onTextPress={onTextPress}
              titleText={'now'}
            />
            <Styled.Wrapper isAudioFile={isAudioFile}>
              <PracticeLibraryCollapsed library={library} />
              <TimerProgressBar setSeconds={setSeconds} seconds={seconds} isOpenAskModal={isOpenAskModal} />
              <TogglerDoNotDisturb isWithPadding isDark marginBottom={moderateScale(45)} />
              <Swiper toggleOpenAskModal={toggleOpenAskModal} text="SWIPE TO END" marginW={62} marginBottom={48} />
            </Styled.Wrapper>
            {isAudioFile && !isIOS && <MediaPlayerSheet audioFile={audioObjectInfo} practiceInfo={practiceInfo} />}
          </Layout>
          {isAudioFile && isIOS && <MediaPlayerSheet audioFile={audioObjectInfo} practiceInfo={practiceInfo} />}
        </PlayerContext.Provider>
      )}
    </>
  );
};
