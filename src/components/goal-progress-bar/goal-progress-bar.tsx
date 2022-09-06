import React, { useEffect } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

import { CircleProgressBar } from './circle-progress-bar';

import { IGoalProgressBarProps } from './goal-progress-bar.typings';

import { StyledGoalProgressBar as Styled } from './goal-progress-bar.styles';

import { COLOR } from '@theme/colors';

export const GoalProgressBar: React.FC<IGoalProgressBarProps> = props => {
  const {
    addedTime,
    minutes,
    maxMinutes,
    size = 230,
    strokeWidth = 15,
    duration = 2000,
    color = COLOR.primary.lightGreen,
    textColor = COLOR.text,
    rotation = 90,
  } = props;

  const animated = React.useRef<Animated.Value>(new Animated.Value(0)).current;
  const circleRef = React.useRef<any>(null);
  const inputRef = React.useRef<any>(null);

  const circumference = size * Math.PI;

  const animation = (toValue: number) => {
    return Animated.timing(animated, {
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(minutes);
    });
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
      animation(minutes);
      animated.addListener(v => {
        setTextValue(v.value);
        const maxPerc = (100 * v.value) / maxMinutes;
        setProgress(maxPerc);
      });
      return () => {
        animated.removeAllListeners();
      };
    }
  }, [addedTime, minutes, maxMinutes]);

  const inferredTextColor = addedTime ? COLOR.primary.green : textColor || color;
  return (
    <Styled.Wrapper>
      <Styled.GoalProgressBar size={size}>
        <CircleProgressBar
          circleRef={circleRef}
          circumference={circumference}
          color={color}
          rotation={rotation}
          size={size}
          strokeWidth={strokeWidth}
        />

        <Styled.AnimatedTextInput
          textColor={inferredTextColor}
          ref={inputRef}
          underlineColorAndroid="transparent"
          editable={false}
          defaultValue="0"
          multiline
          style={StyleSheet.absoluteFillObject}>
          <Styled.Min textColor={inferredTextColor}>min</Styled.Min>
          {addedTime ? (
            <Styled.WeeklyGoal>
              {'\n'}
              {minutes + addedTime} / {maxMinutes} min
            </Styled.WeeklyGoal>
          ) : (
            <Styled.WeeklyGoal>
              {'\n'}Weekly goal:{'\n'}
              {maxMinutes} min
            </Styled.WeeklyGoal>
          )}
        </Styled.AnimatedTextInput>
      </Styled.GoalProgressBar>
    </Styled.Wrapper>
  );
};
