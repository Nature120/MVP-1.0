import React from 'react';

import { StyledSlider as Styled } from './slider.styles';

export const renderPagination = (activeDotIndex: number, totalSlides: number) => {
  if (totalSlides <= 1) {
    return null;
  }

  const Dot = (dotIndex: number) => (
    <Styled.Dot dotIndex={dotIndex} totalSlides={totalSlides} isActive={dotIndex === activeDotIndex} />
  );

  const dots = [];
  for (let i = 0; i < totalSlides; i++) {
    dots.push(React.cloneElement(Dot(i), { key: i }));
  }

  return <Styled.DotsWrapper pointerEvents="none">{dots}</Styled.DotsWrapper>;
};
