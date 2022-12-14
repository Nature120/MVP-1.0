import React, { useEffect, useState } from 'react';
import Purchases from 'react-native-purchases';

import { Icon } from '@components/atoms/icon';
import { OfferItem } from './offer-item/offer-item';

import { arrayBenefits } from './main-section.constants';

import { MainSectionStyled as Styled } from './main-section.styles';

export const MainSection = () => {
  const [offers, setOffers] = useState<any>(null);

  useEffect(() => {
    fetchOfferings();
  }, []);

  const onPressAnnuallySub = () => {
    ///smth
  };

  const onPressMonthlySub = () => {
    //smth
  };

  const fetchOfferings = async () => {
    try {
      const offerings = await Purchases.getOfferings();

      offerings.current !== null && setOffers(offerings.current);

      console.log('offerings', offerings);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <Styled.Container>
      {arrayBenefits.map((benefit, index) => (
        <Styled.BenefitWrapper key={index}>
          <Icon type="check_mark" width={18} height={18} />
          <Styled.BenefitText index={index}>{benefit}</Styled.BenefitText>
        </Styled.BenefitWrapper>
      ))}
      <Styled.OfferingsWrapper>
        {offers?.availablePackages.map(offer => (
          <>
            <OfferItem offer={offer} />
          </>
        ))}
      </Styled.OfferingsWrapper>
    </Styled.Container>
  );
};
