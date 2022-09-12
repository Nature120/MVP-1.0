import React from 'react';

import { ButtonWithLink } from '@components/button-with-link';
import { Layout } from '@components/layout';
import { Slider } from '@components/slider';

import { IMAGES } from '@constants/images';
import { APP_ROUTES } from '@constants/routes';
import { sliderContent } from '@constants/slider-content';

import { StyledSplash as Styled } from './splash.styles';

export const Splash: React.FC = () => {
  return (
    <Layout isWithoutMargin isWithGradient>
      <Styled.SliderContainer>
        <Slider content={sliderContent} />
      </Styled.SliderContainer>

      <ButtonWithLink
        onButtonPressNavigateTo={APP_ROUTES.start.signUp}
        onTextPressNavigateTo={APP_ROUTES.start.signIn}
        buttonText="get started"
        height={50}
        bottomText="Already have an account?"
        routeText="Sign In"
        isWithMagrin
        marginBottom={36}
      />

      <Styled.Ellipses source={IMAGES.ellipses} />
    </Layout>
  );
};
