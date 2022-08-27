import React from 'react';

import { TextCheckbox } from '@components/text-checkbox/text-checkbox';
import { Sapcer, Wrapper } from '@theme/components';
import { useTextCheckboxGroup } from './text-checkbox-group.state';
import { TTextCheckboxGroupProps } from './text-checkbox-group.typings';

export const TextCheckboxGroup: React.FC<TTextCheckboxGroupProps> = props => {
  const { styles, checkboxStyles, gap } = props;
  const { states, onChangeVariants } = useTextCheckboxGroup(props);

  return (
    <Wrapper styles={styles}>
      {states.map((variant, index) => (
        <Sapcer key={variant.name} isLastItem={index === states.length - 1} gap={gap}>
          <TextCheckbox {...variant} onChange={onChangeVariants} styles={checkboxStyles} />
        </Sapcer>
      ))}
    </Wrapper>
  );
};
