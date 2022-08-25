import React, { useState } from 'react';

import { renderPagination } from './render-pagination';
import { nextButtonStyles, StyledSlider as Styled } from './slider.styles';
import { ISliderProps } from './slider.typings';
import { Icon } from '@components/icon';
import { Slide } from './slide';

import Swiper from 'react-native-swiper';

export const Slider: React.FC<ISliderProps> = ({ content }) => {
  const [isNextButtonShown, setisNextButtonShown] = useState(true);

  const onIndexChanged = (slideIndex: number) =>
    setisNextButtonShown(slideIndex !== content.length - 1);

  return (
    <Styled.Slider>
      <Swiper
        loop={false}
        onIndexChanged={onIndexChanged}
        loadMinimal
        showsButtons={true}
        prevButton={<></>}
        nextButton={
          isNextButtonShown && (
            <Icon
              type="arrowRight"
              size={36}
              styles={nextButtonStyles}
              colorIcon="green"
            />
          )
        }
        renderPagination={renderPagination}>
        {content.map(slide => (
          <Slide key={slide.title} slide={slide} />
        ))}
      </Swiper>
    </Styled.Slider>
  );
};
