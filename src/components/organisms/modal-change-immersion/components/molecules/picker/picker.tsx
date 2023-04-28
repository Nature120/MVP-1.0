import React from 'react';

import { Line } from '@components/atoms/line';
import { IGoalItemProps } from './picker.types';

import { StyledPicker as Styled } from './picker.styles';

export const Picker: React.FC<IGoalItemProps> = ({ element, itemWidth }) => {
  return (
    <Styled.PickerWrapper itemWidth={itemWidth}>
      <Styled.PickerTime>{element}</Styled.PickerTime>
      <Line marginTop={5} marginBottom={10} width={60} />
    </Styled.PickerWrapper>
  );
};
