import { useAppDispatch } from '@services/hooks/redux';
import { setIsFirstLaunchCommunity } from '@services/store/app';

export const useStateCommunitySplash = () => {
  const dispatch = useAppDispatch();

  const onCloseModal = () => {
    dispatch(setIsFirstLaunchCommunity(false));
  };

  return { onCloseModal };
};
