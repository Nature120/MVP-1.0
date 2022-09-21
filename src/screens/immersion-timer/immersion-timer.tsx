import React, { useState } from 'react';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import { AskModal } from '@components/ask-modal';
import { Layout } from '@components/layout';
import { IPracticeLibrary } from '@components/practice-libraries/practice-library/practice-library.typings';
import { PracticeLibraryCollapsed } from '@components/practice-libraries/practice-library-collapsed';
import { SwipeTest } from '@components/swipe-test/swipe-test';
import { SwipeToEnd } from '@components/swipe-to-end';
import { TimerProgressBar } from '@components/timer-progress-bar/timer-progress-bar';
import { TogglerDoNotDisturb } from '@components/toggler-do-not-disturb';

import { useParam } from '@services/hooks/param';

import { APP_ROUTES } from '@constants/routes';

export const ImmersionTimer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
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
    navigate(APP_ROUTES.immersionComplete as never, { addedTime: seconds } as never);
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
