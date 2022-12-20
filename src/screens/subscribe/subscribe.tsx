import React from 'react';
import { ScrollView } from 'react-native';

import { CloseButton } from './close-button/close-button';
import { MainSection } from './main-section/main-section';

import { SubscribeStyled as Styled } from './subscribe.styles';

import subscribeBackground from '@assets/images/subscrebe/subscribe_bg.jpg';

export const SubscribeScreen = () => {
  return (
    <ScrollView>
      <Styled.ImageBackground source={subscribeBackground}>
        <Styled.Container>
          <Styled.Header>
            <CloseButton />
          </Styled.Header>
          <Styled.Title>Try Nature 120 Free</Styled.Title>
          <MainSection />
        </Styled.Container>
      </Styled.ImageBackground>
    </ScrollView>
  );
};
