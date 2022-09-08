import React, { useState } from 'react';

import { libraries } from '@screens/immersions/mock-data';
import { AskModal } from '@components/ask-modal';
import { Layout } from '@components/layout';
import { PracticeLibraryCollapsed } from '@components/practice-libraries/practice-library-collapsed';
import { SwipeToEnd } from '@components/swipe-to-end';
import { TogglerDoNotDisturb } from '@components/toggler-do-not-disturb';

import { StyledImmersionTimer as Styled } from './immersion-timer.styles';

const library = libraries[1];

export const ImmersionTimer: React.FC = () => {
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

      <Styled.MockTimerWrapper>
        <Styled.MockTimer />
      </Styled.MockTimerWrapper>

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
