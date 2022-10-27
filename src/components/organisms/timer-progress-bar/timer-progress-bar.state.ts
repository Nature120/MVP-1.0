import { useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTimer } from 'react-use-precision-timer';
import { millisecondsToSeconds } from 'date-fns';
import { minutesToSeconds } from 'date-fns';

import * as utils from './timer-progress-bar.utils';
import { useGoal } from '@services/hooks/goal';
import * as action from '@services/store/timer/timer.actions';
import * as selector from '@services/store/timer/timer.selectors';

import { IProp } from './timer-progress-bar.typings';

export const useTimerProgressBar = ({ seconds, setSeconds, isOpenAskModal }: IProp) => {
  const [time, setTime] = useState<string>('0:00');
  const appState = useRef(AppState.currentState);

  const { dailyGoal } = useGoal();
  const maxSeconds = minutesToSeconds(dailyGoal);
  const percent = (seconds / maxSeconds) * 100;

  const ring = utils.outerCircle(percent);
  const fgRadius = utils.getFgRadius(percent);

  const dispatch = useDispatch();
  const startDate = useSelector(selector.getStartDate);
  const secondsTimer = useSelector(selector.getSeconds);
  const isActive = useSelector(selector.getIsActive);

  const timer = useTimer({ delay: 1000, callback: () => setSeconds((sec: number) => sec + 1) });

  ///Begin state of the timer

  useEffect(() => {
    if (!startDate && secondsTimer) {
      setSeconds(secondsTimer);
      dispatch(action.seconds(secondsTimer));
      return;
    } else if (startDate) {
      const result = millisecondsToSeconds(Date.now() - startDate) + secondsTimer;
      setSeconds(result);
      return;
    } else {
      setSeconds(0);
    }
  }, []);

  ///Listner if app in background mode or no///

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        setSeconds(() => {
          if (!startDate) {
            return secondsTimer;
          }
          const result = millisecondsToSeconds(Date.now() - startDate) + secondsTimer;
          return result;
        });
        return;
      }
      appState.current = nextAppState;
      dispatch(action.startDate(Date.now()));
      dispatch(action.seconds(seconds));
    });
    return () => {
      subscription.remove();
    };
  }, [seconds, startDate, secondsTimer]);

  ////Start timer

  useEffect(() => {
    if (!isActive) {
      dispatch(action.startDate(null));
      timer.stop();
      return;
    }
    startTimer();

    return () => {
      timer.stop();
    };
  }, [isActive, startDate]);

  ///Stop timer if we opened modal///

  useEffect(() => {
    if (!isOpenAskModal) {
      return;
    }
    dispatch(action.isActive(false));
  }, [isOpenAskModal]);

  ////Formate to valide date///

  useEffect(() => {
    const correctTime = formattedTime(seconds);
    setTime(correctTime);
  }, [seconds]);

  const startTimer = () => {
    !startDate && dispatch(action.startDate(Date.now()));
    timer.start();
  };

  const formattedTime = (sec: number) => {
    const forrmatedMinutes = Math.floor(sec / 60);
    const forrmatedSeconds = sec - forrmatedMinutes * 60;
    return `${utils.zeroPad(forrmatedMinutes)}:${utils.zeroPad(forrmatedSeconds)}`;
  };

  const toggle = () => {
    dispatch(action.isActive(!isActive));
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
