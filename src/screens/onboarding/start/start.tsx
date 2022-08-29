import React from 'react';
import { ImageBackground } from 'react-native';

import { Layout } from '@components/layout';
import { LayoutOnboarding } from '@components/layout-onboarding';
import { IMAGES } from '@constants/images';
import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';
import { OnboardingCard, OnboardingTitle } from '@theme/components';
import { StyledStart as Styled } from './start.styles';

const imageStyle = { flex: 1 };

export const Start: React.FC = () => {
  const getPartialBoldText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <Styled.CardText key={line + index} isBold={isMatch}>
        {line}
      </Styled.CardText>
    ));

  return (
    <ImageBackground source={IMAGES.onBoardStart} style={imageStyle}>
      <Layout>
        <LayoutOnboarding buttonText="CONTINUE">
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
