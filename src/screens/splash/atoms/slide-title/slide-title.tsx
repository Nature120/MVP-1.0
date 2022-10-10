import React from 'react';

import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';

import { ISlideTitleProps } from './slide-title.typings';

import { StyledSlideTitle as Styled } from './slide-title.styles';

export const SlideTitle: React.FC<ISlideTitleProps> = ({ title }) => {
  const getPartialBoldText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <Styled.Title key={line + index} isBold={isMatch}>
        {line}
      </Styled.Title>
    ));

  return <Styled.Title>{getPartialBoldText(title)}</Styled.Title>;
};
