import React from 'react';
import { ImageBackground } from 'react-native';

import { OnboardingCard } from '@components/atoms/onboarding-card';
import { OnboardingTitle } from '@components/atoms/onboarding-title';
import { Layout } from '@components/molecules/layout';
import { LayoutOnboarding } from '@components/organisms/layout-onboarding';
import { useStart } from './start.state';

import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';

import { IMAGES } from '@constants/images';

import { imageStyle, StyledStart as Styled } from './start.styles';

export const Start: React.FC = () => {
  const { onSignOut } = useStart();

  const getPartialBoldText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <Styled.CardText key={line + index} isBold={isMatch}>
        {line}
      </Styled.CardText>
    ));

  return (
    <ImageBackground source={IMAGES.onBoardStart} style={imageStyle}>
      <Layout>
        <LayoutOnboarding buttonText="CONTINUE" onBackButtonPress={onSignOut}>
          <Styled.Card>
            <OnboardingCard>
              <OnboardingTitle>You’re not alone.</OnboardingTitle>
              <Styled.CardText>
                {getPartialBoldText(
                  'Welcome to our community of [25 million people] with a collective passion for inspiring human & planetary flourishing through our [re-connection with Nature.]',
                )}
              </Styled.CardText>
            </OnboardingCard>
          </Styled.Card>
        </LayoutOnboarding>
      </Layout>
    </ImageBackground>
  );
};
