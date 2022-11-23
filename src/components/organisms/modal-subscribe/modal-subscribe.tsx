import React from 'react';
import { Modal } from 'react-native';
import { useSelector } from 'react-redux';

import { Button } from '@components/atoms/button';
import { ButtonIcon } from '@components/molecules/button-icon';

import { getSubscribeProducts } from '@services/store/auth/auth.selectors';

import { ModalSubscribeStyles as Styled } from './modal-subscribe.styles';

interface IProp {
  isOpen: boolean;
  closeModal: () => void;
}

export const ModalSubscribe: React.FC<IProp> = ({ isOpen, closeModal }) => {
  const subscriptions = useSelector(getSubscribeProducts);

  const onPressAnnuallySub = () => {
    ///smth
  };

  const onPressMonthlySub = () => {
    //smth
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
          <Styled.SubscribeWrapper>
            <Styled.SubscribeBox marginRight={20}>
              <Styled.SubscribeTitle>Annually Subscribe</Styled.SubscribeTitle>
              <Styled.SubscribePrice>Price: $19.99</Styled.SubscribePrice>
              <Styled.SubscribeText>Lorem ipsum dolor.</Styled.SubscribeText>
              <Styled.SubscribeText>Lorem ipsum.</Styled.SubscribeText>
              <Styled.SubscribeText>Lorem ipsum.</Styled.SubscribeText>
              <Button height={50} styles={Styled.SubBtn} buttonText={'Try Free'} onPress={onPressAnnuallySub} />
            </Styled.SubscribeBox>
            <Styled.SubscribeBox>
              <Styled.SubscribeTitle>Monthly Subscribe</Styled.SubscribeTitle>
              <Styled.SubscribePrice>Price: $1.99</Styled.SubscribePrice>
              <Styled.SubscribeText>Lorem ipsum dolor.</Styled.SubscribeText>
              <Styled.SubscribeText>Lorem ipsum.</Styled.SubscribeText>
              <Styled.SubscribeText>Lorem ipsum.</Styled.SubscribeText>
              <Button height={50} styles={Styled.SubBtn} buttonText={'Try Free'} onPress={onPressMonthlySub} />
            </Styled.SubscribeBox>
          </Styled.SubscribeWrapper>
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
