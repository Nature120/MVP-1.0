import React from 'react';
import { useSelector } from 'react-redux';

import { Loader } from '@components/atoms/loader/loader';
import { LayoutMainSection } from '@components/organisms/layout-main-section/layout-main-section';
import { LayoutWithGrayGreenGradient } from '@components/organisms/layout-with-gray-green-gradient/layout-with-gray-green-gradient';
import { CloseButton } from './close-button/close-button';
import { Footer } from './footer/footer';
import { MainSection } from './main-section/main-section';

import { getLoading } from '@services/store/auth/auth.selectors';

import { SubscribeStyled as Styled } from './subscribe.styles';

export const SubscribeScreen = () => {
  const isloading = useSelector(getLoading);
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <LayoutWithGrayGreenGradient>
          <Styled.Header>
            <CloseButton />
          </Styled.Header>
          <Styled.Title>Try Nature 120 Free</Styled.Title>
          <LayoutMainSection>
            <MainSection />
            <Footer />
          </LayoutMainSection>
        </LayoutWithGrayGreenGradient>
      )}
    </>
  );
};
