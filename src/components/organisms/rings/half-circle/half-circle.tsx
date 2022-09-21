import React from 'react';

import { IHalfCircleProps } from './half-circle.typings';

import { StyledHalfCircle as Styled } from './half-circle.styles';

export const HalfCircle: React.FC<IHalfCircleProps> = props => {
  const { radius, children } = props;

  return (
    <Styled.HalfCircle radius={radius}>
      <Styled.Inner radius={radius}>{children}</Styled.Inner>
    </Styled.HalfCircle>
  );
};
