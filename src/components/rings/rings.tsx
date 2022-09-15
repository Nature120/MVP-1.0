import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { multiply } from 'react-native-reanimated';

import { ModalChangeGoal } from '@components/modal-change-goal';
import { GoalText } from './goal-text';
import { Ring } from './ring';
import { useRings } from './rings.state';

import { IDonutProps } from './rings.typings';

import { StyledRing as Styled } from './rings.styles';

export const Rings: React.FC<IDonutProps> = memo(props => {
  const { rings, progress, inputRef, maxMinutes, fgRadius } = useRings(props);

  // const [test, setTest] = useState(false);
  // useEffect(() => {
  //   setInterval(() => {
  //     setTest(v => !v);
  //   }, 3000);
  // }, []);

  return (
    <Styled.Wrapper>
      <ModalChangeGoal /*  isVisible={isOpen} onClose={onClose} */ />

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
