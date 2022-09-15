import React, { useState } from 'react';

import { AskModal } from '@components/ask-modal';
import { Layout } from '@components/layout';
import { IPracticeLibraryProps } from '@components/practice-libraries/practice-library/practice-library.typings';
import { PracticeLibraryCollapsed } from '@components/practice-libraries/practice-library-collapsed';
import { SwipeToEnd } from '@components/swipe-to-end';
import { TimerTest } from '@components/test-timer/test-timer';
import { TimerProgressBar } from '@components/timer-progress-bar/timer-progress-bar';
import { TogglerDoNotDisturb } from '@components/toggler-do-not-disturb';

import { useParam } from '@services/hooks/param';

import { StyledImmersionTimer as Styled } from './immersion-timer.styles';

export const ImmersionTimer: React.FC = () => {
  const { params: library } = useParam<IPracticeLibraryProps>();
  const [isDoNotDisturb, setIsDoNotDisturb] = useState(false);
  const [isOpenAskModal, setIsOpenAskModal] = useState(false);

  const toggleOpenAskModal = () => setIsOpenAskModal(prev => !prev);

  const saveResponse = () => {
    //TODO save to DB
  };

  const goToNextRoute = () => {
    //TODO next route
  };

  return (
    <Layout isWithGradient ellipseColor="light-green">
      <AskModal
        isVisible={isOpenAskModal}
        onClose={toggleOpenAskModal}
        onButtonPress={saveResponse}
        onTextPress={goToNextRoute}
      />

      <PracticeLibraryCollapsed library={library} />

      {/* <TimerProgressBar /> */}
      <TimerTest />

      <TogglerDoNotDisturb
        isDark
        mb={62}
        mt={72}
        isDoNotDisturb={isDoNotDisturb}
        setIsDoNotDisturb={setIsDoNotDisturb}
      />

      <SwipeToEnd onEndReached={toggleOpenAskModal} />
    </Layout>
  );
};
