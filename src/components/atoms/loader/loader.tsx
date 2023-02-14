import React from 'react';
import { StyleSheet, View } from 'react-native';

import { IMAGES } from '@constants/images';

import { LoaderStyles as Styled } from './loader.styles';

export const Loader = () => {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Styled.Logo source={IMAGES.loader} />
    </View>
  );
};
