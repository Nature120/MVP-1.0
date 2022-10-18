import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { multiply } from 'react-native-reanimated';
import { scale, verticalScale } from 'react-native-size-matters';

import { Icon } from '@components/atoms/icon';
import { Ring } from '@components/molecules/ring';
import { useTimerProgressBar } from './timer-progress-bar.state';

import { IProp } from './timer-progress-bar.typings';

import { StyledRing as Styled } from './timer-progress-bar.styles';

export const TimerProgressBar: React.FC<IProp> = ({ seconds, setSeconds, isOpenAskModal }) => {
  const { ring, fgRadius, time, toggle, isActive } = useTimerProgressBar({
    seconds,
    setSeconds,
    isOpenAskModal,
  });
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
