import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { multiply } from 'react-native-reanimated';

import { GoalText } from './goal-text';
import { Ring } from './ring';
import { useRings } from './rings.state';

import { IDonutProps } from './rings.typings';

import { StyledRing as Styled } from './rings.styles';

export const Rings: React.FC<IDonutProps> = memo(props => {
  const { rings, progress, inputRef, maxMinutes, fgRadius } = useRings(props);

  return (
    <Styled.Wrapper>
      {rings.map((ring, i) => (
        <Styled.Overlay key={i} style={{ ...StyleSheet.absoluteFillObject }}>
          <Ring theta={multiply(ring.theta, progress)} ring={ring} />
        </Styled.Overlay>
      ))}

      <GoalText inputRef={inputRef} maxMinutes={maxMinutes} />

      <Styled.Overlay style={{ ...StyleSheet.absoluteFillObject }}>
        <Styled.Foreground fgRadius={fgRadius} />
      </Styled.Overlay>
    </Styled.Wrapper>
  );
});