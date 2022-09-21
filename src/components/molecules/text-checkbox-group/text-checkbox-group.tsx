import React from 'react';

import { TextCheckbox } from '@components/molecules/text-checkbox/text-checkbox';
import { useTextCheckboxGroup } from './text-checkbox-group.state';

import { TTextCheckboxGroupProps } from './text-checkbox-group.typings';

import { Spacer, Wrapper } from '@theme/components';

export const TextCheckboxGroup: React.FC<TTextCheckboxGroupProps> = props => {
  const { styles, checkboxStyles, gap } = props;
  const { states, onChangeVariants } = useTextCheckboxGroup(props);

  return (
    <Wrapper styles={styles}>
      {states.map((variant, index) => (
        <Spacer key={variant.name} isLastItem={index === states.length - 1} gap={gap}>
          <TextCheckbox {...variant} onChange={onChangeVariants} styles={checkboxStyles} />
        </Spacer>
      ))}
    </Wrapper>
  );
};
