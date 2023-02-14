import React from 'react';
import { View } from 'react-native';
import { PurchasesPackage } from 'react-native-purchases';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { useMainSectionState } from './main-section.state';
import { OfferItem } from './offer-item/offer-item';

import { arrayBenefits } from './main-section.constants';

import { MainSectionStyled as Styled } from './main-section.styles';

export const MainSection = () => {
  const { onPressOffer, buyPackage, offers, checkedButton, checkedOfferName } = useMainSectionState();

  return (
    <Styled.Container>
      <View>
        {arrayBenefits.map((benefit, index) => (
          <Styled.BenefitWrapper key={index}>
            <Icon type="check_mark" width={18} height={18} />
            <Styled.BenefitText index={index}>{benefit}</Styled.BenefitText>
          </Styled.BenefitWrapper>
        ))}
        <Styled.OfferingsWrapper>
          {offers?.availablePackages.map((pack: PurchasesPackage) => (
            <View key={pack.identifier}>
              <OfferItem offer={pack} onPressOffer={onPressOffer} checkedOfferName={checkedOfferName} />
            </View>
          ))}
        </Styled.OfferingsWrapper>
      </View>
      <Button
        buttonText="Try for free"
        isDisabled={!checkedButton}
        styles={Styled.TryForFreeBtn}
        onPress={buyPackage}
      />
    </Styled.Container>
  );
};
