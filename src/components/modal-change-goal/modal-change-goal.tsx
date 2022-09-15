import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';

import { Button } from '@components/button';
import { ButtonIcon } from '@components/button-icon';
import { Icon } from '@components/icon';
import { ModalBottom } from '@components/modal-bottom';

import { updateUser } from '@services/api.service';
import { useGoal } from '@services/hooks/goal';
import { useOpenCloseModal } from '@services/hooks/open-close';
import { useAppDispatch } from '@services/hooks/redux';
import { getUid } from '@services/store/auth/auth.selectors';

import { GOAL_HASH_MAP } from '@screens/onboarding/onboarding.constants';

import { IModalChangeGoalProps } from './modal-change-goal.typings';

import { StyledModalChangeGoal as Styled } from './modal-change-goal.styles';

export const ModalChangeGoal: React.FC = () => {
  const uid = useSelector(getUid);
  const { dailyGoal } = useGoal();
  const [selectedDailyGoal, setSelectedDailyGoal] = useState(dailyGoal);
  const dispatch = useAppDispatch();
  const { isOpen, onClose, onOpen } = useOpenCloseModal();

  const onDone = async () => {
    if (selectedDailyGoal) {
      await updateUser(uid, { dailyGoal: +selectedDailyGoal }, dispatch);
      onClose();
    }
  };

  const onGoalChange = (goal: number) => {
    setSelectedDailyGoal(goal);
  };

  return (
    <>
      <Styled.EditGoal onPress={onOpen}>
        <Icon type="pencil" colorIcon="darkBlue" size={25} />
      </Styled.EditGoal>
      <ModalBottom isVisible={isOpen} onClose={onClose} isWithLogo>
        <ButtonIcon type="arrowLeft" colorIcon="cloudyGreen" size={24} onPress={onClose} />
        <Styled.ModalText>{'Select weekly goal'}</Styled.ModalText>

        <Picker selectedValue={selectedDailyGoal} onValueChange={onGoalChange}>
          {Object.keys(GOAL_HASH_MAP()).map(goal => (
            <Picker.Item key={goal} label={`${GOAL_HASH_MAP()[+goal]} min = ${goal} min/day`} value={goal} />
          ))}
        </Picker>
        <Button buttonText="DONE" height={50} onPress={onDone} />
      </ModalBottom>
    </>
  );
};
