import React from 'react';

import { ButtonIcon } from '@components/molecules/button-icon';

import { MOON_ICONS } from '@constants/moon-icons';

import { IMoonsListProps } from './moons-list.typings';

import { StyledMoonsList as Styled } from './moons-list.styles';

export const MoonsList: React.FC<IMoonsListProps> = ({ iconsSize, selectedIcon, onPressIcon }) => {
  return (
    <Styled.MoonsList>
      {MOON_ICONS.map(({ name, description }) => (
        <Styled.IconWrapper key={name} isActive={!selectedIcon || selectedIcon === name}>
          <ButtonIcon type={name} size={iconsSize} onPress={onPressIcon(name)} isDisabled={selectedIcon === name} />
          <Styled.Text>{description}</Styled.Text>
        </Styled.IconWrapper>
      ))}
    </Styled.MoonsList>
  );
};
