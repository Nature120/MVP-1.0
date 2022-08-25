import React from 'react';
import { ISlideProps } from './slide.typings';
import { StyledSlide as Styled } from './slide.styles';
import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';

export const Slide: React.FC<ISlideProps> = ({ slide }) => {
  const getPartialBoldText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <Styled.Text key={line + index} isBold={isMatch}>
        {line}
      </Styled.Text>
    ));

  return (
    <Styled.Slide>
      <Styled.Title>{slide.title}</Styled.Title>

      <Styled.Text isFullWidth={!!slide.list}>
        {getPartialBoldText(slide.description)}
      </Styled.Text>

      {slide.list && (
        <Styled.List>
          {slide.list.map((line, index) => (
            <Styled.Text key={line + index}>
              {index + 1}. {getPartialBoldText(line)}
              {'\n'}
            </Styled.Text>
          ))}
        </Styled.List>
      )}
    </Styled.Slide>
  );
};
