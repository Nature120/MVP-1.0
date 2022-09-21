import React from 'react';
import { moderateScale } from 'react-native-size-matters';

import { AskModal } from '@components/ask-modal';
import { Layout } from '@components/layout';
import { PracticeLibraryCollapsed } from '@components/practice-libraries/practice-library-collapsed';
import { SwipeTest } from '@components/swipe-test/swipe-test';
import { SwipeToEnd } from '@components/swipe-to-end';
import { TimerProgressBar } from '@components/timer-progress-bar/timer-progress-bar';
import { TogglerDoNotDisturb } from '@components/toggler-do-not-disturb';
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

      <TimerProgressBar setSeconds={setSeconds} seconds={seconds} />

      <TogglerDoNotDisturb
        isDark
        isDoNotDisturb={isDoNotDisturb}
        mb={moderateScale(45)}
        setIsDoNotDisturb={setIsDoNotDisturb}
      />

      <SwipeToEnd onEndReached={toggleOpenAskModal} />
      {/* <SwipeTest /> */}
    </Layout>
  );
};
