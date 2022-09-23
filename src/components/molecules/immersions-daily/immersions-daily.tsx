import React from 'react';

import { Icon } from '@components/atoms/icon';

import { StyledImmersionsDaily as Styled } from './immersions-daily.styles';

const WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const COMPLETED = ['Sun', 'Tue', 'Wed', 'Sat'];

const pluralize = (count: number, noun: string, suffix = 's') => `${count} ${noun}${count !== 1 ? suffix : ''}`;

export const ImmersionsDaily: React.FC = () => {
  const todayIndex = new Date().getDay();
  const today = WEEKDAY[todayIndex];

  return (
    <Styled.ImmersionsDaily>
      <Styled.Header>
        <Icon type="human" colorIcon="green" size={26} />

        <Styled.Title>
          You’ve completed <Styled.Immersions>{pluralize(COMPLETED.length, 'immersion')}</Styled.Immersions> this week!
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
