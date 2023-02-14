import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useStateFooter } from './footer.state';

import { isIOS } from '@services/helpers/device-utils';
import { onPressLink } from '@services/helpers/utils';

import { PRIVACY, TERMS } from '@constants/social-url';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const Footer = () => {
  const { onPressRestorePurchases, onPressPromoCode } = useStateFooter();

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
