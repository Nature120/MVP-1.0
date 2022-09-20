import { useEffect, useMemo, useRef } from 'react';
import { Animated, TextInput } from 'react-native';
import { set, useCode, Value } from 'react-native-reanimated';
import { timing } from 'react-native-redash';

import { ANIMATION_DURATION, getFgRadius, getRings, RING_EASING, TEXT_EASING } from './rings.constants';

import { IDonutProps } from './rings.typings';

export const useRings = (props: IDonutProps) => {
  const { maxMinutes, minutes, addedTime } = props;

  const percent = useMemo(() => {
    if (addedTime) {
      return (100 * (addedTime + minutes)) / maxMinutes;
    }
    return (minutes * 100) / maxMinutes;
  }, [minutes, maxMinutes, addedTime]);

  const rings = useMemo(() => getRings(percent), [percent]);
  const fgRadius = useMemo(() => getFgRadius(percent), [percent]);

  const progress = new Value(0);
  const inputRef = useRef<TextInput>(null);
  const animatedText = useRef<Animated.Value>(new Animated.Value(0)).current;
  useCode(() => set(progress, timing({ duration: ANIMATION_DURATION, easing: RING_EASING })), [progress]);

  const animation = (toValue: number, isFirstAnimation: boolean) => {
    if (isFirstAnimation) {
      return Animated.timing(animatedText, {
        toValue,
        useNativeDriver: true,
        duration: ANIMATION_DURATION,
        easing: TEXT_EASING,
      }).start(() => {
        animation(minutes, false);
      });
    }
  };

  const setTextValue = (value: number, isAddedTime?: boolean) => {
    inputRef?.current?.setNativeProps({
      text: `${isAddedTime ? '+' : ''}${Math.round(value)}`,
    });
  };

  useEffect(() => {
    if (addedTime) {
      return setTextValue(addedTime, true);
    }
    animation(minutes, true);
    animatedText.addListener(v => {
      setTextValue(v.value);
      if (Math.round(v.value) === minutes) {
        animatedText.removeAllListeners();
        animatedText.setValue(0);
      }
    });
    return () => {
      animatedText.removeAllListeners();
    };
  }, [minutes, maxMinutes, addedTime]);

  return {
    rings,
    minutes,
    addedTime,
    progress,
    inputRef,
    maxMinutes,
    fgRadius,
  };
};
