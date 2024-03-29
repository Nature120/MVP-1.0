import React from 'react';

import { MOODS_COUNT } from '../../moods-summary.constants';
import { IMAGES } from '@constants/images';

import { StyledLines as Styled } from './lines.styles';

export const Lines: React.FC = () => {
  return (
    <>
      {[...Array(MOODS_COUNT)].map((_, i) => (
        <Styled.Line source={IMAGES.chartLine} num={i} key={i} />
      ))}
    </>
  );
};
