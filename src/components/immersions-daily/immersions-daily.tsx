import React from 'react';

import { Icon } from '@components/icon';

import { StyledImmersionsDaily as Styled } from './immersions-daily.styles';

const WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const COMPLETED = ['Sun', 'Tue', 'Wed', 'Sat'];

export const ImmersionsDaily: React.FC = () => {
  const todayIndex = new Date().getDay();
  const today = WEEKDAY[todayIndex];

  return (
    <Styled.ImmersionsDaily>
      <Styled.Header>
        <Icon type="human" colorIcon="green" size={26} />

        <Styled.Title>
          You’ve completed <Styled.Immersions>{COMPLETED.length} immersions</Styled.Immersions> this week!
        </Styled.Title>
      </Styled.Header>

      <Styled.CompletedImmersions>
        {WEEKDAY.map(day => (
          <Styled.Day isCompleted={COMPLETED.includes(day)} isToday={day === today} key={day}>
            <Styled.DayText isToday={day === today}>{day}</Styled.DayText>
          </Styled.Day>
        ))}
      </Styled.CompletedImmersions>
    </Styled.ImmersionsDaily>
  );
};
