import React from 'react';

import { IMoonsStatsProps } from './moons-stats.typings';

import { StyledMoonsStats as Styled } from './moons-stats.styles';

export const MoonsStats: React.FC<IMoonsStatsProps> = ({ moons }) => {
  return (
    <>
      {moons?.map((moon, index) => (
        <Styled.Row key={moon?.date.toString()} isLastRow={index === moons.length - 1}>
          <Styled.Mark assessment={moon?.before} type="before" />
          <Styled.Mark assessment={moon?.after} type="after" />
        </Styled.Row>
      ))}
    </>
  );
};
