import React from 'react';

import { Spacer } from '@components/atoms/spacer';
import { ButtonIcon } from '@components/molecules/button-icon';

import { MAX_PAGES_COUNT } from '../../moods-summary.constants';

import { IControlButton, IControlsProps } from './controls.typings';

import { StyledControls as Styled } from './controls.styles';

export const Controls: React.FC<IControlsProps> = props => {
  const { getPrevWeek, getNextWeek, currentPage } = props;

  const buttons: IControlButton[] = [
    { type: 'arrowLeft', isDisabled: currentPage <= 0, onPress: getPrevWeek },
    { type: 'arrowRight', isDisabled: currentPage >= MAX_PAGES_COUNT, onPress: getNextWeek },
  ];

  return (
    <Styled.Controls>
      {buttons.map(({ isDisabled, onPress, type }, index) => (
        <Spacer gap={20} isHorizontal key={type} isLastItem={index === buttons.length - 1}>
          <ButtonIcon
            type={type}
            colorIcon={isDisabled ? 'grey' : 'cloudyGreen'}
            size={22}
            onPress={onPress}
            isDisabled={isDisabled}
          />
        </Spacer>
      ))}
    </Styled.Controls>
  );
};
