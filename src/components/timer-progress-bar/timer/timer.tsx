import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { addSeconds, format } from 'date-fns';

import { Icon } from '@components/icon';
import { IProp } from './timer.types';

import { TimerStyles as Styled } from './timer.styles';

export const Timer: React.FC<IProp> = ({ timerSeconds, setTimerseconds, setProgressValue }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [time, setTime] = useState<string>('0:00');

  useEffect(() => {
    let interval: number | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimerseconds((sec: number) => sec + 1);
        setProgressValue((sec: number) => sec + 1);
      }, 1000);
    } else if (!isActive && timerSeconds !== 0 && interval !== null) {
      clearInterval(interval);
    }
    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isActive, timerSeconds]);

  useEffect(() => {
    const correctTime = formattedTime(timerSeconds);
    setTime(correctTime);
  }, [timerSeconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const formattedTime = (sec: number) => {
    const helperDate = addSeconds(new Date(0), sec);
    return format(helperDate, 'm:ss');
  };

  return (
    <Styled.Container>
      <Styled.TextNumber>{time}</Styled.TextNumber>
      <TouchableOpacity onPress={toggle}>
        <Styled.IconWrapper>
          {isActive ? (
            <Icon type="pause" width={scale(33)} height={verticalScale(36)} />
          ) : (
            <Icon type="play" width={scale(33)} height={verticalScale(36)} />
          )}
        </Styled.IconWrapper>
      </TouchableOpacity>
    </Styled.Container>
  );
};
