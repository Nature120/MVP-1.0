import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { ButtonIcon } from '@components/molecules/button-icon';
import { ModalBottom } from '@components/molecules/modal-bottom';
import { useModalChangeGoal } from './modal-change.state';

import { ITEM_WIDTH, LINEAR_GRADIENT_CONFIG, PICKER_DATA } from './modal-change-goal.constants';
import { GOAL_HASH_MAP } from '@screens/onboarding/onboarding.constants';

import { linerarGradient, StyledModalChangeGoal as Styled } from './modal-change-goal.styles';

import { Line } from '@theme/components';

export const ModalChangeGoal: React.FC = () => {
  const { isOpen, onOpen, onClose, onDone, onGoalChange, defaultIndex } = useModalChangeGoal();

  const rednerItem = (goal: number) => (
    <Styled.Item>
      <Styled.WeeklyText>{GOAL_HASH_MAP()[goal]}</Styled.WeeklyText>
      <Line marginTop={5} marginBottom={10} width={60} />

      <Styled.Bottom>
        <Styled.DailyText>{goal}</Styled.DailyText>

        <Styled.MinDay>
          <Styled.MinDayText>min</Styled.MinDayText>
          <Line marginTop={2} marginBottom={2} />
          <Styled.MinDayText>day</Styled.MinDayText>
        </Styled.MinDay>
      </Styled.Bottom>
    </Styled.Item>
  );

  return (
    <>
      <Styled.EditGoal onPress={onOpen}>
        <Icon type="pencil" colorIcon="darkBlue" size={25} />
      </Styled.EditGoal>

      <ModalBottom isVisible={isOpen} onClose={onClose} isWithLogo>
        <ButtonIcon type="arrowLeft" colorIcon="cloudyGreen" size={24} onPress={onClose} />
        <Styled.ModalText>{'Select weekly goal'}</Styled.ModalText>

        <Styled.Container>
          <HorizontalPicker
            animatedScrollToDefaultIndex
            defaultIndex={defaultIndex}
            data={PICKER_DATA}
            renderItem={rednerItem}
            itemWidth={ITEM_WIDTH}
            onChange={onGoalChange}
          />
          <LinearGradient
            pointerEvents="none"
            style={linerarGradient}
            colors={LINEAR_GRADIENT_CONFIG.colors}
            start={LINEAR_GRADIENT_CONFIG.start}
            end={LINEAR_GRADIENT_CONFIG.end}
          />
        </Styled.Container>

        <Button buttonText="DONE" height={50} onPress={onDone} />
      </ModalBottom>
    </>
  );
};
