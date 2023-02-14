import { useState } from 'react';

import { getCheckboxGroupState } from '@services/helpers/get-checkbox-group-state';

import { IWeeklyGroupState, IWeeklyGroupStateProps } from './weekly-goal-checkbox-group.typings';

export const useWeeklyGoalCheckboxGroup = (props: IWeeklyGroupStateProps) => {
  const { onChange, variants } = props;
  const [states, setStates] = useState<IWeeklyGroupState[]>(getCheckboxGroupState(variants, 'minPerDay'));

  const onChangeVariants = (value: boolean, name: string) => {
    const newState = states.map(state => {
      if (state.name === name) {
        return { ...state, isChecked: value };
      }
      return { ...state, isChecked: false };
    });

    onChange(value ? name : '');
    setStates(newState);
  };

  return {
    states,
    onChangeVariants,
  };
};
