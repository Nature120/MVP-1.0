import React from 'react';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { ButtonIcon } from '@components/molecules/button-icon';
import { ModalBottom } from '@components/molecules/modal-bottom';
import { useModalChangeGoal } from './modal-change.state';
import { GoalPicker } from './molecules/goal-picker';

import { PICKER_DATA } from './modal-change-goal.constants';

import { StyledModalChangeGoal as Styled } from './modal-change-goal.styles';

export const ModalChangeGoal: React.FC = () => {
  const { isOpen, onOpen, onClose, onDone, onGoalChange, defaultIndex } = useModalChangeGoal();

  return (
    <>
      <Styled.EditGoal onPress={onOpen}>
        <Icon type="pencil" colorIcon="darkBlue" size={25} />
      </Styled.EditGoal>

      <ModalBottom isVisible={isOpen} onClose={onClose} isWithLogo>
        <ButtonIcon type="arrowLeft" colorIcon="cloudyGreen" size={24} onPress={onClose} />
        <Styled.ModalText>{'Select weekly goal'}</Styled.ModalText>

        <GoalPicker onGoalChange={onGoalChange} defaultIndex={defaultIndex} data={PICKER_DATA} />

        <Button buttonText="DONE" height={50} onPress={onDone} />
      </ModalBottom>
    </>
  );
};
