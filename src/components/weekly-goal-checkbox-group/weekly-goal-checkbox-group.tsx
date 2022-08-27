import React from 'react';

import { WeeklyGoalCheckbox } from '@components/weekly-goal-checkbox/weekly-goal-checkbox';
import { Sapcer, Wrapper } from '@theme/components';
import { useWeeklyGoalCheckboxGroup } from './weekly-goal-checkbox-group.state';
import { IWeeklyGoalCheckboxGroupProps } from './weekly-goal-checkbox-group.typings';

export const WeeklyGoalCheckboxGroup: React.FC<IWeeklyGoalCheckboxGroupProps> = props => {
  const { gap, styles } = props;
  const { onChangeVariants, states } = useWeeklyGoalCheckboxGroup(props);

  return (
    <Wrapper styles={styles}>
      {states.map((variant, index) => (
        <Sapcer key={variant.name} isLastItem={index === states.length - 1} gap={gap}>
          <WeeklyGoalCheckbox {...variant} onChange={onChangeVariants} />
        </Sapcer>
      ))}
    </Wrapper>
  );
};
