import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';

import { SubscribeSectionStyled as Styled } from './subscribe-section.styles';

interface IProp {
  closeModal: () => void;
}

export const SubscribeSection: React.FC<IProp> = ({ closeModal }) => {
  const { navigate } = useNavigation();
  const onPressViewOptions = () => {
    navigate('Subscribe' as never);
    closeModal();
  };

  return (
    <Styled.Container>
      <Icon type="practices" width={63} height={52} />
      <Styled.Title>Nature 120 Subscription Required</Styled.Title>
      <Styled.Text>
        Try free for 7 days to unlock this and gain {'\n'} unlimited access to over 200+ life-changing,{'\n'} evidence
        based nature therapy practices.
      </Styled.Text>
      <Button buttonText="view options" styles={Styled.Btn} onPress={onPressViewOptions} />
    </Styled.Container>
  );
};
