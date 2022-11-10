import React from 'react';

import { MOON_ICONS } from '@components/atoms/icon';
import { ButtonIcon } from '@components/molecules/button-icon';

import { IMoonsListProps } from './moons-list.typings';

import { StyledMoonsList as Styled } from './moons-list.styles';

export const MoonsList: React.FC<IMoonsListProps> = ({ iconsSize, selectedIcon, onPressIcon }) => {
  return (
    <Styled.MoonsList>
      {MOON_ICONS.map(type => (
        <Styled.IconWrapper key={type} isActive={!selectedIcon || selectedIcon === type}>
          <ButtonIcon type={type} size={iconsSize} onPress={onPressIcon(type)} isDisabled={selectedIcon === type} />
        </Styled.IconWrapper>
      ))}
    </Styled.MoonsList>
  );
};
