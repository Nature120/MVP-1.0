import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '@services/api.service';
import { updateSubscription } from '@services/store/auth/auth.actions';
import { getUid } from '@services/store/auth/auth.selectors';

export const useStoreSubscription = () => {
  const dispatch = useDispatch();
  const uid = useSelector(getUid);

  const storeSubscription = async (productIdentifier: string) => {
    switch (productIdentifier) {
      case 'nt_1999_12':
        dispatch(updateSubscription('ANNUAL'));
        await updateUser(uid, { subscription: 'ANNUAL' });
        break;
      case 'nt_199_1m':
        dispatch(updateSubscription('MONTHLY'));
        await updateUser(uid, { subscription: 'MONTHLY' });
        break;
      default:
        dispatch(updateSubscription('FREE'));
        await updateUser(uid, { subscription: 'FREE' });
        break;
    }
  };

  return { storeSubscription };
};
