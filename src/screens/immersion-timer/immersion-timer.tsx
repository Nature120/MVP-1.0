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

interface IPlayerContext {
  isPlayerReady: boolean;
  isAudioFile: boolean;
}

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

  return (
    <PlayerContext.Provider value={{ isPlayerReady, isAudioFile }}>
      <Layout isWithGradient ellipseColor="light-green" isWithScroll>
        <AskModal
          isVisible={isOpenAskModal}
          onClose={toggleOpenAskModal}
          onButtonPress={saveResponse}
          onTextPress={onTextPress}
          titleText={'now'}
        />
        <View style={styles.Wrapper}>
          <View>
            <PracticeLibraryCollapsed library={library} />
            <TimerProgressBar setSeconds={setSeconds} seconds={seconds} isOpenAskModal={isOpenAskModal} />
          </View>
          <View>
            <TogglerDoNotDisturb isWithPadding isDark marginBottom={moderateScale(45)} />
            <Swiper toggleOpenAskModal={toggleOpenAskModal} text="SWIPE TO END" marginW={62} marginBottom={48} />
          </View>
        </View>
      </Layout>
    </PlayerContext.Provider>
  );
};

const styles = StyleSheet.create({
  Wrapper: { flex: 1, justifyContent: 'space-between' },
});
