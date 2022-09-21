import React from 'react';

import { Image } from '@components/atoms/image';

import { URI } from '@constants/images';

import { IRingsGradientProps } from './rings-gradient.typings';

import { maskStyle, StyledRingsGradient as Styled } from './rings-gradient.styles';

export const RingsGradient: React.FC<IRingsGradientProps> = props => {
  const {
    size,
    colors: [start, end],
  } = props;

  return (
    <Styled.Wrapper size={size} startColor={start}>
      <Styled.MaskedView
        maskElement={
          <Image
            styles={maskStyle}
            width={size}
            height={size}
            source={{ uri: URI.mask }}
            borderRadius={size / 2}
            priority={'high'}
          />
        }>
        <Styled.Inner size={size} endColor={end} />
      </Styled.MaskedView>
    </Styled.Wrapper>
  );
};
