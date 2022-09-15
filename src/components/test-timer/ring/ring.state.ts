import { useEffect, useMemo, useRef, useState } from 'react';
// import { Animated, Easing } from 'react-native';
import { set, useCode, Value } from 'react-native-reanimated';
import { Easing as AnimatedEasing } from 'react-native-reanimated';
import { timing } from 'react-native-redash';

import { TAU } from '../test-timer';

const getTheta = (percent: number) => (percent / 100) * TAU;

const outerCircle = (percent: number): any => ({
  start: '#0CA152',
  end: '#0CA152',
  bg: '#D1EBE0',
  theta: getTheta(percent),
  size: 230,
});

export const getFgRadius = (percent: number) => {
  return outerCircle(percent).size / 2 - 15;
};

// import { ANIMATION_DURATION, getFgRadius, getRings, RING_EASING, TEXT_EASING } from './rings.constants';

// import { IDonutProps } from './rings.typings';

export const useRings = (props: any) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  const { maxSeconds } = props;

  //   const percent = useMemo(() => (seconds * 100) / maxSeconds, [maxSeconds, seconds]);

  //   const ring = useMemo(() => outerCircle(percent), [percent]);
  //   const fgRadius = useMemo(() => getFgRadius(percent), [percent]);

  const percent = (seconds * 100) / maxSeconds;

  const ring = useMemo(() => outerCircle(percent), [percent]);
  const fgRadius = useMemo(() => getFgRadius(percent), [percent]);

  const progress = new Value(0);
  //   const inputRef = useRef<any>(null);
  //   const animatedText = useRef<Animated.Value>(new Animated.Value(0)).current;
  useCode(
    () => set(progress, timing({ duration: 0.1, easing: AnimatedEasing.out(AnimatedEasing.linear) })),
    [progress],
  );

  useEffect(() => {
    let interval: number | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((sec: number) => sec + 1);
        // setProgressValue((sec: number) => sec + 1);
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

  //   const animation = (toValue: number, isFirstAnimation: boolean) => {
  //     if (isFirstAnimation) {
  //       return Animated.timing(animatedText, {
  //         toValue,
  //         useNativeDriver: true,
  //         duration: 0,
  //         easing: Easing.out(Easing.ease),
  //       }).start(() => {
  //         animation(minutes, false);
  //       });
  //     }
  //   };

  //   const setTextValue = (value: number, isAddedTime?: boolean) => {
  //     if (inputRef?.current) {
  //       inputRef.current.setNativeProps({
  //         text: `${isAddedTime ? '+' : ''}${Math.round(value)}`,
  //       });
  //     }
  //   };

  //   useEffect(() => {
  //     animation(minutes, true);
  //     animatedText.addListener(v => {
  //       setTextValue(v.value);
  //       if (Math.round(v.value) === minutes) {
  //         animatedText.removeAllListeners();
  //       }
  //     });
  //     return () => {
  //       animatedText.removeAllListeners();
  //     };
  //   }, [minutes, maxMinutes]);

  return {
    ring,
    progress,
    // inputRef,
    maxSeconds,
    fgRadius,
    isActive,
    seconds,
    setIsActive,
  };
};
