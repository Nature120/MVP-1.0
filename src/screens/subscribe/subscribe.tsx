import React from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';

import { Loader } from '@components/atoms/loader/loader';
import { CloseButton } from './close-button/close-button';
import { Footer } from './footer/footer';
import { MainSection } from './main-section/main-section';

import { getLoading } from '@services/store/auth/auth.selectors';

import { IMAGES } from '@constants/images';

import { SubscribeStyled as Styled } from './subscribe.styles';

export const SubscribeScreen = () => {
  const isloading = useSelector(getLoading);
  const scrollViewStyls: ViewStyle = { flexGrow: 1, justifyContent: 'center' };
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <Styled.ImageBackground source={IMAGES.subscribeBackground} resizeMode="cover">
          <ScrollView contentContainerStyle={scrollViewStyls as ViewStyle}>
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
          </ScrollView>
        </Styled.ImageBackground>
      )}
    </>
  );
};
