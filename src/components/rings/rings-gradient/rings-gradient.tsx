import React from 'react';

import { IMAGES } from '@constants/images';

import { IRingsGradientProps } from './rings-gradient.typings';

import { StyledRingsGradient as Styled } from './rings-gradient.styles';

export const RingsGradient: React.FC<IRingsGradientProps> = props => {
  const {
    size,
    colors: [start, end],
  } = props;

  return (
    <Styled.Wrapper size={size} startColor={start}>
      <Styled.MaskedView maskElement={<Styled.MaskImage size={size} source={IMAGES.mask} />}>
        <Styled.Inner size={size} endColor={end} />
      </Styled.MaskedView>
    </Styled.Wrapper>
  );
};
