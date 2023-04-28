import React from 'react';

import { GoalPicker } from '@components/molecules/goal-picker';
import { ITEM_WIDTH } from '@components/molecules/goal-picker/goal-picker.constants';
import { ModalChange } from '@components/molecules/modal-change';
import { Picker } from './components/molecules/picker';
import { useModalChangeImmersion } from './modal-change-immersion.state';
import { IModalChangeImmersionProps, IPickers } from './modal-change-immersion.types';

import { StyledModalChangeImmersion as Styled } from './modal-change-immersion.styles';

export const ModalChangeImmersion: React.FC<IModalChangeImmersionProps> = ({ setImmersion }) => {
  const { pickers, modalChange } = useModalChangeImmersion(setImmersion);

  const renderItem = (_: string, index: number) => <Picker element={index} itemWidth={ITEM_WIDTH} />;

  const pickerCallback = ({ title, data, defaultIndex, onChange }: IPickers) => (
    <>
      <Styled.ModalText>{title}</Styled.ModalText>
      <GoalPicker onGoalChange={onChange} renderItem={renderItem} defaultIndex={defaultIndex} data={data} />
    </>
  );

  return (
    <ModalChange title="Edit your immersion information!" {...modalChange}>
      {pickers.map(pickerCallback)}
    </ModalChange>
  );
};
