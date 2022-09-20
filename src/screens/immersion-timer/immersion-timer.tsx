import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AskModal } from '@components/ask-modal';
import { Layout } from '@components/layout';
import { IPracticeLibrary } from '@components/practice-libraries/practice-library/practice-library.typings';
import { PracticeLibraryCollapsed } from '@components/practice-libraries/practice-library-collapsed';
import { SwipeToEnd } from '@components/swipe-to-end';
import { TimerProgressBar } from '@components/timer-progress-bar/timer-progress-bar';
import { TogglerDoNotDisturb } from '@components/toggler-do-not-disturb';

import { useParam } from '@services/hooks/param';

import { APP_ROUTES } from '@constants/routes';

const MOCK_ADDED_TIME = 34; //FIXME

export const ImmersionTimer: React.FC = () => {
  const { navigate } = useNavigation();
  const { params: library } = useParam<IPracticeLibrary>();
  const [isDoNotDisturb, setIsDoNotDisturb] = useState(false);
  const [isOpenAskModal, setIsOpenAskModal] = useState(false);

  const toggleOpenAskModal = () => setIsOpenAskModal(prev => !prev);

  const saveResponse = () => {
    //TODO save to DB
  };

  const goToNextRoute = () => {
    setIsOpenAskModal(false);
    navigate(APP_ROUTES.immersionComplete as never, { addedTime: MOCK_ADDED_TIME } as never);
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

      <TimerProgressBar />

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
