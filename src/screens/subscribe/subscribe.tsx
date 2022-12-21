import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { Loader } from '@components/atoms/loader/loader';
import { CloseButton } from './close-button/close-button';
import { Footer } from './footer/footer';
import { MainSection } from './main-section/main-section';

import { getLoading } from '@services/store/auth/auth.selectors';

import { SubscribeStyled as Styled } from './subscribe.styles';

import subscribeBackground from '@assets/images/subscrebe/subscribe_bg.jpg';

export const SubscribeScreen = () => {
  const isloading = useSelector(getLoading);
  return (
    <ScrollView>
      {isloading ? (
        <Loader />
      ) : (
        <Styled.ImageBackground source={subscribeBackground}>
          <Styled.Container>
            <Styled.Header>
              <CloseButton />
            </Styled.Header>
            <Styled.Title>Try Nature 120 Free</Styled.Title>
            <Styled.MainWrapper>
              <MainSection />
              <Footer />
            </Styled.MainWrapper>
          </Styled.Container>
        </Styled.ImageBackground>
      )}
    </ScrollView>
  );
};
