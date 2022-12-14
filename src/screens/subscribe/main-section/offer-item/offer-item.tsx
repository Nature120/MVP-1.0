import React from 'react';

import { OfferItemtyled as Styled } from './offer-item.styles';

interface IProp {
  offer: any;
}

export const OfferItem: React.FC<IProp> = ({ offer }) => {
  const { packageType } = offer;
  const { description, priceString, title } = offer.product;
  const isAnnual = packageType === 'ANNUAL';
  return (
    <>
      {isAnnual && (
        <Styled.OfferLabel>
          <Styled.OfferLabelText>Best Value</Styled.OfferLabelText>
        </Styled.OfferLabel>
      )}
      <Styled.OfferBtn key={offer.identifier}>
        <Styled.OfferTitle>asdas</Styled.OfferTitle>
      </Styled.OfferBtn>
    </>
  );
};
