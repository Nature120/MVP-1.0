import { useCallback, useEffect, useState } from 'react';
import Purchases, { PACKAGE_TYPE, PurchasesOffering, PurchasesPackage } from 'react-native-purchases';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { useStoreSubscription } from '@services/hooks/subscription-store';
import { loading } from '@services/store/auth/auth.actions';

export const useMainSectionState = () => {
  const [offers, setOffers] = useState<PurchasesOffering | null>(null);
  const [offer, setOffer] = useState<PurchasesPackage | null>(null);
  const [checkedButton, setCheckedButton] = useState<boolean>(false);
  const [checkedOfferName, setCheckedOfferName] = useState<PACKAGE_TYPE | null>(null);
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  const { storeSubscription } = useStoreSubscription();

  useEffect(() => {
    fetchOfferings();
  }, []);

  const buyPackage = async () => {
    if (!offer) {
      return;
    }
    try {
      const { customerInfo } = await Purchases.purchasePackage(offer);
      const { premium } = customerInfo.entitlements.active;
      if (typeof premium !== 'undefined') {
        await storeSubscription(premium.productIdentifier);
        goBack();
        return;
      }
      //End loaging screen
      dispatch(loading(false));
    } catch (e: any) {
      if (!e.userCancelled) {
        console.log('error', e);
      }
    }
  };

  const onPressOffer = useCallback(
    (pack: PurchasesPackage) => {
      const { packageType } = pack;
      !checkedButton && setCheckedButton(true);
      setCheckedOfferName(packageType);
      setOffer(pack);
    },
    [offer, checkedOfferName, setCheckedButton],
  );

  const fetchOfferings = async () => {
    try {
      const { current } = await Purchases.getOfferings();
      current !== null && setOffers(current);
    } catch (error) {
      console.log('error', error);
    }
  };

  return { onPressOffer, buyPackage, offers, checkedButton, checkedOfferName };
};
