import React from 'react';
import { moderateScale } from 'react-native-size-matters';

import { AskModal } from '@components/molecules/ask-modal';
import { Layout } from '@components/molecules/layout';
import { TogglerDoNotDisturb } from '@components/molecules/toggler-do-not-disturb';
import { PracticeLibraryCollapsed } from '@components/organisms/practice-libraries/practice-library-collapsed';
import { Swiper } from '@components/swiper/swiper';
import { TimerProgressBar } from '@components/timer-progress-bar/timer-progress-bar';
import { useImmersionTimer } from './immersion-timer.state';

export const ImmersionTimer: React.FC = () => {
  const {
    isOpenAskModal,
    saveResponse,
    goToNextRoute,
    library,
    isDoNotDisturb,
    setIsDoNotDisturb,
    toggleOpenAskModal,
    seconds,
    setSeconds,
  } = useImmersionTimer();

  return (
    <Layout isWithGradient ellipseColor="light-green">
      <AskModal
        isVisible={isOpenAskModal}
        onClose={toggleOpenAskModal}
        onButtonPress={saveResponse}
        onTextPress={goToNextRoute}
      />

      <PracticeLibraryCollapsed library={library} />

      <TimerProgressBar setSeconds={setSeconds} seconds={seconds} isOpenAskModal={isOpenAskModal} />

      <TogglerDoNotDisturb
        isDark
        isDoNotDisturb={isDoNotDisturb}
        mb={moderateScale(45)}
        setIsDoNotDisturb={setIsDoNotDisturb}
      />

      <Swiper toggleOpenAskModal={toggleOpenAskModal} text="SWIPE TO END" marginW={62} />
    </Layout>
  );
};
