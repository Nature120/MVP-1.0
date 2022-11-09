import React from 'react';

import { IDaysProps } from './days.typings';

import { StyledDays as Styled } from './days.styles';

const DAYS = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
};

export const Days: React.FC<IDaysProps> = props => {
  return (
    <Styled.Days>
      {[...Array(7)].map((_, i) => (
        <Styled.Day isLastDay={i === 6} key={i}>
          {DAYS[i as keyof typeof DAYS]}
        </Styled.Day>
      ))}
    </Styled.Days>
  );
};
