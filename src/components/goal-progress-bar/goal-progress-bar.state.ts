import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import { IUseGoalProgressBarProps } from './goal-progress-bar.typings';

export const useGoalProgressBar = (props: IUseGoalProgressBarProps) => {
  const { addedTime, minutes, maxMinutes, size = 230, duration = 2000 } = props;

  const animated = useRef<Animated.Value>(new Animated.Value(0)).current;
  const circleRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  const circumference = size * Math.PI;

  const animation = (toValue: number, isFirstAnimation: boolean) => {
    if (isFirstAnimation) {
      return Animated.timing(animated, {
        toValue,
        duration,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start(() => {
        animation(minutes, false);
      });
    }
  };

  const setTextValue = (value: number, isAddedTime?: boolean) => {
    if (inputRef?.current) {
      inputRef.current.setNativeProps({
        text: `${isAddedTime ? '+' : ''}${Math.round(value)}`,
      });
    }
  };

  const setProgress = (maxPerc: number) => {
    if (circleRef?.current) {
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
      circleRef.current.setNativeProps({
        strokeDashoffset,
      });
    }
  };

  useEffect(() => {
    if (addedTime) {
      setTextValue(addedTime, true);
      const maxPerc = (100 * (addedTime + minutes)) / maxMinutes;
      setProgress(maxPerc);
    } else {
      animation(minutes, true);
      animated.addListener(v => {
        setTextValue(v.value);
        const maxPerc = (100 * v.value) / maxMinutes;
        setProgress(maxPerc);

        if (Math.round(v.value) === minutes) {
          animated.removeAllListeners();
        }
      });
      return () => {
        animated.removeAllListeners();
      };
    }
  }, [addedTime, minutes, maxMinutes]);

  return {
    addedTime,
    minutes,
    maxMinutes,
    size,
    circleRef,
    circumference,
    inputRef,
  };
};
