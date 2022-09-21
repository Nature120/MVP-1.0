import React from 'react';
import FastImage from 'react-native-fast-image';

import { IImageProps } from './image.typings';

import { ImageStyles as Styled } from './image.styles';

export const Image: React.FC<IImageProps> = props => {
  const { width, height, borderRadius = 0, styles, source, resizeMode, priority, children = null, cache } = props;

  return (
    <Styled.Image
      borderRadius={borderRadius}
      source={{
        ...source,
        priority: FastImage.priority[priority || 'normal'],
        cache: FastImage.cacheControl[cache || 'immutable'],
      }}
      height={height}
      width={width}
      styles={styles}
      resizeMode={resizeMode}>
      {children}
    </Styled.Image>
  );
};
