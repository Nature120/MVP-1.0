import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import { Icon } from '@components/atoms/icon';
import { WEEKDAY } from './immersions-daily.contstants';

import { getFisishedPractices } from '@services/store/auth/auth.selectors';

import { StyledImmersionsDaily as Styled } from './immersions-daily.styles';

export const ImmersionsDaily: React.FC = () => {
  const lastPractices = useSelector(getFisishedPractices);
  const currentWeekDay = format(new Date(), 'iii');

  const markUpWeekDay = () => {
    if (!lastPractices) {
      return;
    }

    return WEEKDAY.map(day => {
      const isCurrentDay = day === currentWeekDay;
      const isMatchDay = lastPractices.some(({ created_at }) => {
        const convertToDate = created_at.toDate();
        const getDay = format(convertToDate, 'iii');
        return day === getDay;
      });
      return (
        <Styled.Day key={day} isMatchDay={isMatchDay} isCurrentDay={isCurrentDay}>
          <Styled.DayText isCurrentDay={isCurrentDay}>{day}</Styled.DayText>
        </Styled.Day>
      );
    });
  };

  const weekDays = markUpWeekDay();

  return (
    <Styled.ImmersionsDaily>
      <Styled.Header>
        <Icon type="brandIcon" colorIcon="green" size={35} />

        <Styled.Title>
          You’ve completed <Styled.Immersions>{lastPractices?.length} immersions</Styled.Immersions> this week!
        </Styled.Title>
      </Styled.Header>

      <Styled.CompletedImmersions>{weekDays}</Styled.CompletedImmersions>
    </Styled.ImmersionsDaily>
  );
};
