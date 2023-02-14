import { useSelector } from 'react-redux';

import { getSubscription } from '@services/store/auth/auth.selectors';

export const usePracticeLocked = (isPremiumPractice: string) => {
  const userSubStatus = useSelector(getSubscription);
  const isLockPractice = userSubStatus === 'FREE' && isPremiumPractice === 'Subscription';
  return { isLockPractice };
};
