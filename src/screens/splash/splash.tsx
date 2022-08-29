import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Layout } from '@components/layout';
import { Slider } from '@components/slider';

import { handleNavigate } from '@services/helpers/handle-navigate';

import { IMAGES } from '@constants/images';
import { APP_ROUTES } from '@constants/routes';
import { sliderContent } from '@constants/slider-content';

import { StyledSplash as Styled } from './splash.styles';

export const Splash: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Layout isWithoutMargin isWithGradient>
      <Styled.SliderContainer>
        <Slider content={sliderContent} />
      </Styled.SliderContainer>

      <Styled.Actions>
        <Styled.Button
          onPress={handleNavigate(navigate, APP_ROUTES.start.signUp)}>
          <Styled.ButtonText>GET STARTED</Styled.ButtonText>
        </Styled.Button>

        <Styled.SubButton>
          <Styled.SubButtonText>Already have an account?</Styled.SubButtonText>

          <TouchableOpacity
            onPress={handleNavigate(navigate, APP_ROUTES.start.signIn)}>
            <Styled.SignIn>Sign In</Styled.SignIn>
          </TouchableOpacity>
        </Styled.SubButton>
      </Styled.Actions>
      <Styled.Ellipses source={IMAGES.ellipses} />
    </Layout>
  );
};
