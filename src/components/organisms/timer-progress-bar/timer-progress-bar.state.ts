import { useEffect, useState } from 'react';
import BackgroundTimer from 'react-native-background-timer';
import { minutesToSeconds } from 'date-fns';

import * as utils from './timer-progress-bar.utils';
import { isIOS } from '@services/helpers/device-utils';
import { useGoal } from '@services/hooks/goal';

import { IProp } from './timer-progress-bar.typings';

export const useTimerProgressBar = ({ seconds, setSeconds, isOpenAskModal }: IProp) => {
  const [time, setTime] = useState<string>('0:00');
  const [isActive, setIsActive] = useState<boolean>(true);

  const { dailyGoal } = useGoal();
  const maxSeconds = minutesToSeconds(dailyGoal);
  const percent = (seconds / maxSeconds) * 100;

  const ring = utils.outerCircle(percent);
  const fgRadius = utils.getFgRadius(percent);

  //Timer

  let timerId: number | null = null;
  let expected: number;
  const interval = 1000;

  useEffect(() => {
    if (isActive) {
      startTimer();
    }

    return () => {
      if (timerId !== null) {
        stopTimer();
      }
    };
  }, [isActive]);

  ///Stoping timer when we opened modal///

  useEffect(() => {
    if (!isOpenAskModal) {
      return;
    }

    setIsActive(false);
  }, [isOpenAskModal]);

  ////Formate to valide date///

  useEffect(() => {
    const correctTime = formattedTime(seconds);
    setTime(correctTime);
  }, [seconds]);

  //Start timer implementation---------------------///

  const startTimer = () => {
    expected = Date.now() + interval;

    if (!isIOS) {
      timerId = BackgroundTimer.setTimeout(step, interval);
      return;
    }
    BackgroundTimer.start();
    timerId = setTimeout(step, interval);
  };

  const stopTimer = () => {
    if (!timerId) {
      return;
    } else if (!isIOS) {
      BackgroundTimer.clearInterval(timerId);
      return;
    } else {
      BackgroundTimer.stop();
      clearInterval(timerId);
    }
  };

  const step = () => {
    const drift = Date.now() - expected;
    if (drift > interval) {
      // You could have some default stuff here too...
    }

    setSeconds((sec: number) => sec + 1);

    expected += interval;

    if (!isIOS) {
      timerId = BackgroundTimer.setTimeout(step, Math.max(0, interval - drift));
      return;
    }
    BackgroundTimer.start();
    timerId = setTimeout(step, Math.max(0, interval - drift));
  };

  //End Timer implementation-----------------------///

  const formattedTime = (sec: number) => {
    const forrmatedMinutes = Math.floor(sec / 60);
    const forrmatedSeconds = sec - forrmatedMinutes * 60;
    return `${utils.zeroPad(forrmatedMinutes)}:${utils.zeroPad(forrmatedSeconds)}`;
  };

  const toggle = () => {
    setIsActive(!isActive);
  };

  return {
    ring,
    maxSeconds,
    fgRadius,
    time,
    toggle,
    isActive,
  };
};
