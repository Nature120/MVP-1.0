import React from 'react';

import { IGradientProps } from './gradient.typings';

import { StyledGradient as Styled } from './gradient.styles';

export const GRADIENT_COLORS = ['#EDE5DF', '#F0F7F7'];
export const GRADIENT_LOCATIONS = [0.3, 0.7];

export const Gradient: React.FC<IGradientProps> = props => {
  const { children, colors, locations } = props;
  return (
    <Styled.Gradient
      colors={colors || GRADIENT_COLORS}
      locations={locations || GRADIENT_LOCATIONS}>
      {children}
    </Styled.Gradient>
  );
};
