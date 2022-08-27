import { useState } from 'react';

import { getCheckboxGroupState } from '@services/helpers/get-checkbox-group-state';
import { IGroupState, TTextCheckboxGroupProps } from './text-checkbox-group.typings';

export const useTextCheckboxGroup = (props: TTextCheckboxGroupProps) => {
  const { isMulti, onChange, variants } = props;
  const [states, setStates] = useState<IGroupState[]>(getCheckboxGroupState(variants, 'text'));

  const onChangeVariants = (value: boolean, name?: string) => {
    const newState = states.map(state => {
      if (state.name === name) {
        return { ...state, isChecked: value };
      }
      if (isMulti) {
        return state;
      }
      return { ...state, isChecked: false };
    });

    const selectedVariants = isMulti
      ? newState.filter(variant => variant.isChecked).map(variant => variant.name)
      : value
      ? name
      : '';

    onChange(selectedVariants as string & string[]);

    setStates(newState);
  };

  return {
    states,
    onChangeVariants,
  };
};
