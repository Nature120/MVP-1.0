import { useState } from 'react';
import { useSelector } from 'react-redux';

import { updateUser } from '@services/api.service';
import { useAppDispatch } from '@services/hooks/redux';
import { getUid } from '@services/store/auth/auth.selectors';

import { TDailyGoal } from '@typings/common';

export const useWeeklyGoal = () => {
  const [selectedGoal, setSelectedGoal] = useState<TDailyGoal>();
  const uid = useSelector(getUid);
  const dispatch = useAppDispatch();

  const onPress = async () => {
    await updateUser(uid, { dailyGoal: selectedGoal }, dispatch);
  };

  const onChangeGoal = (newGoal: string) => {
    setSelectedGoal(+newGoal as TDailyGoal);
  };

  return {
    onPress,
    onChangeGoal,
    selectedGoal,
  };
};
