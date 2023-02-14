import React from 'react';
import Swiper from 'react-native-swiper';

import { Slide } from '../slide';
import { renderPagination } from './render-pagination';

import { ISliderProps } from './slider.typings';

import { StyledSlider as Styled } from './slider.styles';

export const Slider: React.FC<ISliderProps> = ({ content }) => {
  return (
    <Styled.Slider>
      <Swiper loop={false} renderPagination={renderPagination}>
        {content.map(slide => (
          <Slide key={slide.title} slide={slide} />
        ))}
      </Swiper>
    </Styled.Slider>
  );
};
