import React from 'react';
import { PACKAGE_TYPE, PurchasesPackage } from 'react-native-purchases';

import { isIOS } from '@services/helpers/device-utils';

import { OfferItemtyled as Styled } from './offer-item.styles';

interface IProp {
  offer: PurchasesPackage;
  onPressOffer: (pack: PurchasesPackage) => void;
  checkedOfferName: PACKAGE_TYPE | null;
}

export const OfferItem: React.FC<IProp> = ({ offer, onPressOffer, checkedOfferName }) => {
  const { packageType } = offer;
  const { priceString, currencyCode, price } = offer.product;
  const isAnnual = packageType === 'ANNUAL';
  const isSelectedOffer = packageType === checkedOfferName;

  return (
    <>
      <Styled.OfferBtn isSelectedOffer={isSelectedOffer} onPress={() => onPressOffer(offer)}>
        {isAnnual && (
          <Styled.OfferLabel isSelectedOffer={isSelectedOffer}>
            <Styled.OfferLabelText>Best Value</Styled.OfferLabelText>
          </Styled.OfferLabel>
        )}
        <Styled.OfferTitle>{isAnnual ? 'Annually' : 'Monthly'}</Styled.OfferTitle>
        <Styled.OfferText>{isIOS ? priceString : `${currencyCode} ${price}`}</Styled.OfferText>
        <Styled.OfferText marginBottom={10}>per {isAnnual ? 'year' : 'month'}</Styled.OfferText>
        <Styled.OfferInfo marginBottom={4}>{isAnnual ? 'First 7 days free' : 'First 3 days free'}</Styled.OfferInfo>
        <Styled.OfferInfo marginBottom={4}>{isAnnual ? 'Billed yearly' : 'Billed monthly'}</Styled.OfferInfo>
        <Styled.OfferInfo>Cancel anytime</Styled.OfferInfo>
      </Styled.OfferBtn>
    </>
  );
};
