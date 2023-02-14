import Purchases from 'react-native-purchases';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { useStoreSubscription } from '@services/hooks/subscription-store';
import { loading } from '@services/store/auth/auth.actions';

import { APP_ROUTES } from '@constants/routes';

export const useStateFooter = () => {
  const { goBack, navigate } = useNavigation();
  const { storeSubscription } = useStoreSubscription();
  const dispatch = useDispatch();

  const onPressRestorePurchases = async () => {
    dispatch(loading(true));

    try {
      const { entitlements } = await Purchases.restorePurchases();

      await storeSubscription(entitlements.active.premium.productIdentifier);

      goBack();
    } catch (e) {
      console.log('error', e);
    } finally {
      dispatch(loading(false));
    }
  };

  const onPressPromoCode = () => {
    navigate(APP_ROUTES.promoCode as never);
  };
  return { onPressRestorePurchases, onPressPromoCode };
};
