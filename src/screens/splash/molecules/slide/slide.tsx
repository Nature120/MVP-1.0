import React from 'react';
import { Image } from 'react-native';

import { SlideTitle } from '../../atoms/slide-title';

import { IMAGES } from '@constants/images';

import { ISlideProps } from './slide.typings';

import { StyledSlide as Styled } from './slide.styles';

export const Slide: React.FC<ISlideProps> = ({ slide }) => {
  const { title, image, description } = slide;

  return (
    <Styled.Slide>
      <Styled.SlideContent>
        <Styled.ImageWrapper>
          <Image source={IMAGES[image]} />
        </Styled.ImageWrapper>
        <SlideTitle title={title} />

        <Styled.Description>{description}</Styled.Description>
      </Styled.SlideContent>
    </Styled.Slide>
  );
};
