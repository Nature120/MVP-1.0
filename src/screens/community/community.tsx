import React from 'react';

import { Image } from '@components/atoms/image';
import { Layout } from '@components/molecules/layout';

import { StyledCommunity as Styled } from './community.styles';

export const Community: React.FC = () => {
  return (
    <Layout isWithGradient ellipseColor="light-green">
      <Styled.Container>
        <Image source={{ uri: 'https://i.imgur.com/VGolXJ3.png' }} height={150} width={150} />
        <Styled.Title>Coming Soon!</Styled.Title>
        <Styled.Text>
          We are growing the worlds first {'\n'} truly diverse, global group of nature {'\n'} therapy experts.
        </Styled.Text>
      </Styled.Container>
    </Layout>
  );
};
