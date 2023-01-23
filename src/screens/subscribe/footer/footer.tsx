import React from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Purchases from 'react-native-purchases';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { isIOS } from '@services/helpers/device-utils';
import { useStoreSubscription } from '@services/hooks/subscription-store';
import { loading } from '@services/store/auth/auth.actions';

import { APP_ROUTES } from '@constants/routes';
import { PRIVACY, TERMS } from '@constants/social-url';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const Footer = () => {
  const { goBack, navigate } = useNavigation();
  const { storeSubscription } = useStoreSubscription();
  const dispatch = useDispatch();

  const onPressLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open ${url}`);
    }
  };

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

  return (
    <View style={styles.Wrapper}>
      <TouchableOpacity style={styles.Button} onPress={() => onPressLink(PRIVACY)}>
        <Text style={styles.ButtonText}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressLink(TERMS)} style={styles.Button}>
        <Text style={styles.ButtonText}>Terms</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRestorePurchases} style={styles.Button}>
        <Text style={styles.ButtonText}>Restore Purchases</Text>
      </TouchableOpacity>
      {isIOS && (
        <TouchableOpacity onPress={onPressPromoCode}>
          <Text style={styles.ButtonText}>Promo code</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: { flexDirection: 'row', justifyContent: 'center' },
  Button: { marginRight: 10 },
  ButtonText: {
    fontFamily: FONTS.family.mediumAcumin,
    fontSize: FONTS.size.mediumSmall,
    fontWeight: `${FONTS.weight.medium}`,
    lineHeight: 14.4,
    color: COLOR.font.footer,
    textDecorationLine: 'underline',
  },
});
