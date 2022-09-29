import React from 'react';
import { StyleSheet } from 'react-native';

import { IMAGES } from '@constants/images';

import { LoaderStyles as Styled } from './loader.styles';

export const Loader = () => {
  return (
    <Styled.Loader style={{ ...StyleSheet.absoluteFillObject }}>
      <Styled.Logo source={IMAGES.logo} />
    </Styled.Loader>
  );
};
