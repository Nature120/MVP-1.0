import React, { createContext, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { AskModal } from '@components/molecules/ask-modal';
import { Layout } from '@components/molecules/layout';
import { Swiper } from '@components/molecules/swiper/swiper';
import { TogglerDoNotDisturb } from '@components/molecules/toggler-do-not-disturb';
import { PracticeLibraryCollapsed } from '@components/organisms/practice-libraries/practice-library-collapsed';
import { TimerProgressBar } from '@components/organisms/timer-progress-bar/timer-progress-bar';
import { useImmersionTimer } from './immersion-timer.state';
import { IPlayerContext } from './immersion-timer.types';
import { MediaPlayerSheet } from './media-player-sheet/media-player-sheet';

import { isIOS } from '@services/helpers/device-utils';

const PlayerContext = createContext<IPlayerContext | Record<string, never>>({});
export const usePlayer = () => useContext(PlayerContext);

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
  } = useImmersionTimer();

  const { audioFile, ...practiceInfo } = library;

  return (
    <PlayerContext.Provider value={{ isPlayerReady, isAudioFile }}>
      <Layout isWithGradient ellipseColor="light-green" isWithScroll isWithoutMargin>
        <AskModal
          isVisible={isOpenAskModal}
          onClose={toggleOpenAskModal}
          onButtonPress={saveResponse}
          onTextPress={onTextPress}
          titleText={'now'}
        />
        <View style={{ ...styles.Wrapper, marginBottom: isAudioFile ? 35 : 0 }}>
          <PracticeLibraryCollapsed library={library} />
          <TimerProgressBar setSeconds={setSeconds} seconds={seconds} isOpenAskModal={isOpenAskModal} />
          <TogglerDoNotDisturb isWithPadding isDark marginBottom={moderateScale(45)} />
          <Swiper toggleOpenAskModal={toggleOpenAskModal} text="SWIPE TO END" marginW={62} marginBottom={48} />
        </View>
        {isAudioFile && !isIOS && <MediaPlayerSheet audioFile={audioFile} practiceInfo={practiceInfo} />}
      </Layout>
      {isAudioFile && isIOS && <MediaPlayerSheet audioFile={audioFile} practiceInfo={practiceInfo} />}
    </PlayerContext.Provider>
  );
};

const styles = StyleSheet.create({
  Wrapper: { flexGrow: 1, marginHorizontal: 24, justifyContent: 'space-between' },
});
