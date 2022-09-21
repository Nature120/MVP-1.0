import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { getGoalByIndex, getIndexByGoal } from './modal-change-goal.utils';
import { updateUser } from '@services/api.service';
import { useGoal } from '@services/hooks/goal';
import { useOpenCloseModal } from '@services/hooks/open-close';
import { useAppDispatch } from '@services/hooks/redux';
import { getUid } from '@services/store/auth/auth.selectors';

export const useModalChangeGoal = () => {
  const uid = useSelector(getUid);
  const { dailyGoal } = useGoal();
  const [selectedDailyGoal, setSelectedDailyGoal] = useState(dailyGoal);
  const dispatch = useAppDispatch();
  const { isOpen, onClose, onOpen } = useOpenCloseModal();

  const onDone = async () => {
    if (!selectedDailyGoal) {
      return;
    }
    if (selectedDailyGoal === dailyGoal) {
      return onClose();
    }
    await updateUser(uid, { dailyGoal: selectedDailyGoal }, dispatch);
    onClose();
  };

  const onGoalChange = (index: number) => {
    const goal = getGoalByIndex(index);
    setSelectedDailyGoal(+goal);
  };

  const defaultIndex = useMemo(() => getIndexByGoal(selectedDailyGoal), [selectedDailyGoal]);

  return {
    isOpen,
    onOpen,
    onDone,
    onGoalChange,
    onClose,
    defaultIndex,
  };
};
