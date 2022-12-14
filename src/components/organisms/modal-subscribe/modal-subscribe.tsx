import React, { useEffect, useState } from 'react';
import { Modal } from 'react-native';
import Purchases from 'react-native-purchases';
import { useSelector } from 'react-redux';

import { Button } from '@components/atoms/button';
import { ButtonIcon } from '@components/molecules/button-icon';
import { OffersList } from './offer-list/offer-list';

import { getSubscribeProducts } from '@services/store/auth/auth.selectors';

import { ModalSubscribeStyles as Styled } from './modal-subscribe.styles';

interface IProp {
  isOpen: boolean;
  closeModal: () => void;
}

export const ModalSubscribe: React.FC<IProp> = ({ isOpen, closeModal }) => {
  const [offers, setOffers] = useState<any>(null);
  const subscriptions = useSelector(getSubscribeProducts);

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
    <Modal transparent={true} visible={isOpen} animationType="slide">
      <Styled.Container>
        <Styled.HeaderWrapper>
          <Styled.WrapperSVG>
            <ButtonIcon isWithBg type="cross" iconIndent={9} size={36} colorIcon="cloudyGreen" onPress={closeModal} />
          </Styled.WrapperSVG>
          <Styled.TitleText>Dummy Title</Styled.TitleText>
        </Styled.HeaderWrapper>
        <Styled.MainContainer>
          <OffersList offers={offers} />
          <Styled.SubscribeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum, ex eu commodo semper, libero massa
            blandit enim, id tincidunt sapien tortor et elit. Aliquam erat volutpat. Pellentesque auctor leo dolor, ac
            vehicula eros rhoncus eget.
          </Styled.SubscribeText>
          <Styled.BottomGroupWrapper>
            <Styled.BottomBtn>
              <Styled.BottomBtnText>Terms/Privacy</Styled.BottomBtnText>
            </Styled.BottomBtn>
            <Styled.BottomBtn>
              <Styled.BottomBtnText>Promo code</Styled.BottomBtnText>
            </Styled.BottomBtn>
            <Styled.BottomBtn>
              <Styled.BottomBtnText>Restore Purchases</Styled.BottomBtnText>
            </Styled.BottomBtn>
          </Styled.BottomGroupWrapper>
        </Styled.MainContainer>
      </Styled.Container>
    </Modal>
  );
};
