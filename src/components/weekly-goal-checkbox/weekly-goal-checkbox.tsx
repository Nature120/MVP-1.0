import React from 'react';

import { TextCheckbox } from '@components/text-checkbox';

import { IWeeklyGoalCheckboxProps } from './weekly-goal-checkbox.typings';

import { StyledWeeklyGoalCheckbox as Styled } from './weekly-goal-checkbox.styles';

export const WeeklyGoalCheckbox: React.FC<IWeeklyGoalCheckboxProps> = props => {
  const { minPerDay, text, onChange, isChecked, name } = props;
  return (
    <TextCheckbox
      isChecked={isChecked}
      borderRadius={18}
      onChange={onChange}
      name={name}
      renderComponent={
        <Styled.WeeklyGoalCheckbox isChecked={isChecked}>
          <Styled.MinutesPerDay>
            <Styled.Minutes isChecked={isChecked}>{minPerDay}</Styled.Minutes>
            <Styled.MinDay isChecked={isChecked}>min/day</Styled.MinDay>
          </Styled.MinutesPerDay>

          <Styled.VerticalLine isChecked={isChecked} />

          <Styled.Text isChecked={isChecked}>{text}</Styled.Text>
        </Styled.WeeklyGoalCheckbox>
      }
    />
  );
};
