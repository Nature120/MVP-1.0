import React from 'react';
import { ImageBackground } from 'react-native';

import { Layout } from '@components/molecules/layout';
import { LayoutOnboarding } from '@components/organisms/layout-onboarding';
import { Card } from './molecules/card';
import { useStart } from './start.state';

import { IMAGES } from '@constants/images';

import { imageStyle } from './start.styles';

export const Start: React.FC = () => {
  useStart();

  return (
    <ImageBackground source={IMAGES.onBoardStart} style={imageStyle}>
      <Layout>
        <LayoutOnboarding buttonText="CONTINUE">
          <Card />
        </LayoutOnboarding>
      </Layout>
    </ImageBackground>
  );
};
