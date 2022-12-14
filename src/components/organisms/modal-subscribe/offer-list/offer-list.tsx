import React from 'react';

import { Button } from '@components/atoms/button';

import { OfferListStyled as Styled } from './offer-list.styles';

interface IProp {
  offers: any;
}

export const OffersList: React.FC<IProp> = ({ offers }) => {
  return (
    <Styled.SubscribeWrapper>
      {offers?.availablePackages.map((offer: any) => (
        <>
          {offer.packageType === 'ANNUAL' ? (
            <Styled.SubscribeBox key={offer.identifier} marginRight={20}>
              <Styled.SubscribeTitle>Annually</Styled.SubscribeTitle>
              <Styled.SubscribePrice>$19.99/year</Styled.SubscribePrice>
              <Styled.SubscribeText>Lorem ipsum dolor.</Styled.SubscribeText>
              <Styled.SubscribeText>Lorem ipsum.</Styled.SubscribeText>
              <Styled.SubscribeText>Lorem ipsum.</Styled.SubscribeText>
              <Button height={50} styles={Styled.SubBtn} buttonText={'Try Free'} />
            </Styled.SubscribeBox>
          ) : (
            <Styled.SubscribeBox key={offer.identifier} marginRight={20}>
              <Styled.SubscribeTitle>Monthly</Styled.SubscribeTitle>
              <Styled.SubscribePrice>$1.99/monthly</Styled.SubscribePrice>
              <Styled.SubscribeText>Lorem ipsum dolor.</Styled.SubscribeText>
              <Styled.SubscribeText>Lorem ipsum.</Styled.SubscribeText>
              <Styled.SubscribeText>Lorem ipsum.</Styled.SubscribeText>
              <Button height={50} styles={Styled.SubBtn} buttonText={'Try Free'} />
            </Styled.SubscribeBox>
          )}
        </>
      ))}
    </Styled.SubscribeWrapper>
  );
};
