import { useAppSelector } from '@services/hooks/redux';

export const useStateCommunity = () => {
  const { isFirstLaunchCommunity } = useAppSelector(store => store.app);

  return { isFirstLaunchCommunity };
};
