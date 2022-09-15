import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { moderateScale } from 'react-native-size-matters';
import { Circle, TransformProps } from 'react-native-svg';

import { CircleSvg } from './circle-svg';
import { Timer } from './timer/timer';

import { TimerProgressBarStyles as Styled } from './timer-progress-bar.styles';

export const TimerProgressBar = ({ max = 50, duration = 0, delay = 0 }) => {
  const [timerSeconds, setTimerseconds] = useState<number>(45);
  const [progressValue, setProgressValue] = useState<number>(45);
  const [isFinished, setIsFinished] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const secondAnimatedValue = useRef(new Animated.Value(0)).current;
  const shadowAnimatedValue = useRef(new Animated.Value(0)).current;
  const radius = moderateScale(140, 0.2);
  const strokeWidth = moderateScale(25, 0.2);
  const circleRef = useRef<Circle | null>(null);
  const secondCircleRef = useRef<Circle | null>(null);
  const shadowCircleRef = useRef<Circle | null>(null);
  const halfCircle = radius + strokeWidth;
  const circumference = 2 * Math.PI * radius;

  const animation = (toValue: number) => {
    return Animated.timing(animatedValue, {
      delay,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  const animationShadow = (toValue: number) => {
    Animated.timing(shadowAnimatedValue, {
      delay,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  const secondCircleAnimation = (toValue: number) => {
    Animated.timing(secondAnimatedValue, {
      delay,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  useEffect(() => {
    if (progressValue === max) {
      setProgressValue(0);
    } else if (timerSeconds >= max) {
      secondCircleAnimation(progressValue);
      animationShadow(progressValue + 0.5);

      secondAnimatedValue.addListener(v => {
        const maxPerc = (v.value / max) * 100;
        const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
        secondCircleRef?.current?.setNativeProps({ strokeDashoffset } as TransformProps);
      });

      shadowAnimatedValue.addListener(v => {
        const maxPerc = (v.value / max) * 100;
        const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
        shadowCircleRef?.current?.setNativeProps({ strokeDashoffset } as TransformProps);
      });

      return;
    } else {
      animation(progressValue);

      animatedValue.addListener(v => {
        const maxPerc = (v.value / max) * 100;
        const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
        circleRef?.current?.setNativeProps({ strokeDashoffset } as TransformProps);
      });
    }

    return () => {
      animatedValue.removeAllListeners();
      secondAnimatedValue.removeAllListeners();
      shadowAnimatedValue.removeAllListeners();
    };
  }, [max, progressValue, timerSeconds]);

  return (
    <Styled.Container>
      <CircleSvg
        halfCircle={halfCircle}
        strokeWidth={strokeWidth}
        radius={radius}
        circleRef={circleRef}
        circumference={circumference}
        shadowCircleRef={shadowCircleRef}
        isFinished={isFinished}
        secondCircleRef={secondCircleRef}
      />
      <Styled.TimerWrapper>
        <Styled.TimerTitleText>Time Elapsed</Styled.TimerTitleText>
        <Timer timerSeconds={timerSeconds} setTimerseconds={setTimerseconds} setProgressValue={setProgressValue} />
      </Styled.TimerWrapper>
    </Styled.Container>
  );
};
