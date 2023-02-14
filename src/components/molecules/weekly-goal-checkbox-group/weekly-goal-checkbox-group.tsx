import React from 'react';

import { Spacer } from '@components/atoms/spacer';
import { Wrapper } from '@components/atoms/wrapper';
import { WeeklyGoalCheckbox } from '@components/molecules/weekly-goal-checkbox';
import { useWeeklyGoalCheckboxGroup } from './weekly-goal-checkbox-group.state';

import { IWeeklyGoalCheckboxGroupProps } from './weekly-goal-checkbox-group.typings';

export const WeeklyGoalCheckboxGroup: React.FC<IWeeklyGoalCheckboxGroupProps> = props => {
  const { gap, styles } = props;
  const { onChangeVariants, states } = useWeeklyGoalCheckboxGroup(props);

  return (
    <Wrapper styles={styles}>
      {states.map((variant, index) => (
        <Spacer key={variant.name} isLastItem={index === states.length - 1} gap={gap}>
          <WeeklyGoalCheckbox {...variant} onChange={onChangeVariants} />
        </Spacer>
      ))}
    </Wrapper>
  );
};
