import React from 'react';
import { Image } from 'react-native';

import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';

import { IMAGES } from '@constants/images';

import { ISlideProps } from './slide.typings';

import { StyledSlide as Styled } from './slide.styles';

export const Slide: React.FC<ISlideProps> = ({ slide }) => {
  const getPartialBoldText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <Styled.Title key={line + index} isBold={isMatch}>
        {line}
      </Styled.Title>
    ));

  return (
    <Styled.Slide>
      <Styled.SlideContent>
        <Styled.ImageWrapper>
          <Image source={IMAGES[slide.image]} />
        </Styled.ImageWrapper>
        <Styled.Title>{getPartialBoldText(slide.title)}</Styled.Title>

        <Styled.Description>{slide.description}</Styled.Description>
      </Styled.SlideContent>
    </Styled.Slide>
  );
};
