import { useSelector } from 'react-redux';

import { getUserInfo } from '@services/store/auth/auth.selectors';

import { GOAL_HASH_MAP } from '@screens/onboarding/onboarding.constants';

export const useGoal = () => {
  const dailyGoal = useSelector(getUserInfo).dailyGoal || 0;
  const weeklyGoal = (dailyGoal && GOAL_HASH_MAP[dailyGoal]) || 0;

  return { dailyGoal, weeklyGoal };
};
