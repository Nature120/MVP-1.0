import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { Circle } from '@components/molecules/circle/circle';
import { ModalChangeGoal } from '@components/organisms/modal-change-goal';
import { ModalChangeImmersion } from '../modal-change-immersion';
import { GoalText } from './goal-text';
import { useRings } from './rings.state';

import { IDonutProps } from './rings.typings';

import { StyledRing as Styled } from './rings.styles';

export const Rings: React.FC<IDonutProps> = memo(props => {
  const { rings, progress, inputRef, maxMinutes, fgRadius, minutes, isAddedTime, addedTime } = useRings(props);

  const { isChangeImmersion, setImmersion } = props;

  return (
    <Styled.Wrapper>
      {!isChangeImmersion && !isAddedTime && <ModalChangeGoal />}
      {isChangeImmersion && setImmersion && <ModalChangeImmersion setImmersion={setImmersion} />}

      {rings.map((ring, i) => (
        <Circle ring={ring} key={i} progress={progress} />
      ))}

      <GoalText inputRef={inputRef} maxMinutes={maxMinutes} minutes={minutes} addedTime={addedTime} />

      <Styled.Overlay style={{ ...StyleSheet.absoluteFillObject }}>
        <Styled.Foreground fgRadius={fgRadius} />
      </Styled.Overlay>
    </Styled.Wrapper>
  );
});
