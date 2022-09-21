import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { multiply } from 'react-native-reanimated';
import { scale, verticalScale } from 'react-native-size-matters';

import { Icon } from '@components/icon';
import { Ring } from './ring/ring';
import { useTimerProgressBar } from './timer-progress-bar.state';

import { IProp } from './timer-progress-bar.typings';

import { StyledRing as Styled } from './timer-progress-bar.styles';

export const TimerProgressBar: React.FC<IProp> = ({ seconds, setSeconds }) => {
  const { ring, fgRadius, isActive, setIsActive, time } = useTimerProgressBar({ seconds, setSeconds });

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Styled.Wrapper>
      <Styled.Overlay style={{ ...StyleSheet.absoluteFillObject }}>
        <Ring theta={multiply(ring.theta, 1)} ring={ring} />
      </Styled.Overlay>

      <Styled.TimerWrapper>
        <Styled.TimerTitleText>Time Elapsed</Styled.TimerTitleText>
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
      </Styled.TimerWrapper>

      <Styled.Overlay style={{ ...StyleSheet.absoluteFillObject }}>
        <Styled.Foreground fgRadius={fgRadius} />
      </Styled.Overlay>
    </Styled.Wrapper>
  );
};
