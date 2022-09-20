import { useEffect, useState } from 'react';
import { addSeconds, format } from 'date-fns';

import * as utils from './timer-progress-bar.utils';

interface IProp {
  maxSeconds: number;
}

export const useTimerProgressBar = ({ maxSeconds }: IProp) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [time, setTime] = useState<string>('0:00');
  const [isActive, setIsActive] = useState<boolean>(false);

  const percent = (seconds / maxSeconds) * 100;

  const ring = utils.outerCircle(percent);
  const fgRadius = utils.getFgRadius(percent);

  useEffect(() => {
    let interval: number | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((sec: number) => sec + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0 && interval !== null) {
      clearInterval(interval);
    }
    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isActive, seconds]);

  useEffect(() => {
    const correctTime = formattedTime(seconds);
    setTime(correctTime);
  }, [seconds]);

  const formattedTime = (sec: number) => {
    const helperDate = addSeconds(new Date(0), sec);
    return format(helperDate, 'm:ss');
  };

  return {
    ring,
    maxSeconds,
    fgRadius,
    isActive,
    time,
    setIsActive,
  };
};
