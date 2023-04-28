import React from 'react';

import { GoalPicker } from '@components/molecules/goal-picker';
import { ITEM_WIDTH } from '@components/molecules/goal-picker/goal-picker.constants';
import { ModalChange } from '@components/molecules/modal-change';
import { useModalChangeGoal } from './modal-change-goal.state';
import { GoalItem } from './molecules/goal-item';

import { PICKER_DATA } from './modal-change-goal.constants';

export const ModalChangeGoal: React.FC = () => {
  const { isOpen, onDone, onOpen, onClose, onGoalChange, defaultIndex } = useModalChangeGoal();

  const renderItem = (goal: number) => <GoalItem goal={goal} itemWidth={ITEM_WIDTH} />;

  return (
    <ModalChange title="Select weekly goal" isOpen={isOpen} onDone={onDone} onOpen={onOpen} onClose={onClose}>
      <GoalPicker onGoalChange={onGoalChange} defaultIndex={defaultIndex} data={PICKER_DATA} renderItem={renderItem} />
    </ModalChange>
  );
};
