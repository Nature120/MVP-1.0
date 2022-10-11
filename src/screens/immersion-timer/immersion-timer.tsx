import React from 'react';
import { moderateScale } from 'react-native-size-matters';

import { AskModal } from '@components/molecules/ask-modal';
import { Layout } from '@components/molecules/layout';
import { Swiper } from '@components/molecules/swiper/swiper';
import { TogglerDoNotDisturb } from '@components/molecules/toggler-do-not-disturb';
import { PracticeLibraryCollapsed } from '@components/organisms/practice-libraries/practice-library-collapsed';
import { TimerProgressBar } from '@components/organisms/timer-progress-bar/timer-progress-bar';
import { useImmersionTimer } from './immersion-timer.state';

export const ImmersionTimer: React.FC = () => {
  const { isOpenAskModal, saveResponse, onModalClose, library, toggleOpenAskModal, seconds, setSeconds } =
    useImmersionTimer();

  return (
    <Layout isWithGradient ellipseColor="light-green" isWithScroll={true}>
      <AskModal
        isVisible={isOpenAskModal}
        onClose={toggleOpenAskModal}
        onButtonPress={saveResponse}
        onTextPress={onModalClose}
      />

      <PracticeLibraryCollapsed library={library} />

      <TimerProgressBar setSeconds={setSeconds} seconds={seconds} isOpenAskModal={isOpenAskModal} />

      <TogglerDoNotDisturb isDark marginBottom={moderateScale(45)} />

      <Swiper toggleOpenAskModal={toggleOpenAskModal} text="SWIPE TO END" marginW={62} marginBottom={48} />
    </Layout>
  );
};
