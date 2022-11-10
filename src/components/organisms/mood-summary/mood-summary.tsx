import React from 'react';

import { Days } from './atoms/days';
import { Lines } from './atoms/lines';
import { MoonsStats } from './atoms/moons-stats';
import { Controls } from './molecules/controls';
import { MoonsIcons } from './molecules/moons-icons';
import { useMoodSummary } from './mood-summary.state';

import { MAX_PAGES_COUNT } from './moods-summary.constants';

import { StyledMoodSummary as Styled } from './mood-summary.styles';

export const MoodSummary: React.FC = () => {
  const { moons, getPrevWeek, getNextWeek, currentPage, currentWeekRange } = useMoodSummary();

  return (
    <>
      <Styled.Title>Your Mood Summary</Styled.Title>
      <Styled.Subtitle>Spending time in nature can help your mood improve over time.</Styled.Subtitle>

      <Styled.Week>
        <Styled.WeekRange style={{ fontVariant: ['tabular-nums'] }}>
          {currentPage === MAX_PAGES_COUNT ? 'This Week' : currentWeekRange}
        </Styled.WeekRange>
        <Controls getPrevWeek={getPrevWeek} getNextWeek={getNextWeek} currentPage={currentPage} />
      </Styled.Week>

      <Styled.Designations>
        <Styled.Designation>
          <Styled.DesignationText>Before:</Styled.DesignationText>
          <Styled.Mark type="before" />
        </Styled.Designation>
        <Styled.Designation>
          <Styled.DesignationText>After:</Styled.DesignationText>
          <Styled.Mark type="after" />
        </Styled.Designation>
      </Styled.Designations>

      <Styled.MoodSummary>
        <Styled.Wrapper>
          <Days />

          <Styled.Inner>
            <>
              <Lines />
              <MoonsStats moons={moons} />
            </>
          </Styled.Inner>
        </Styled.Wrapper>

        <MoonsIcons />
      </Styled.MoodSummary>
    </>
  );
};
