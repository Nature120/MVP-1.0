import React from 'react';

import { Icon } from '@components/atoms/icon';

import { MOON_ICONS } from '@constants/moon-icons';

import { StyledMoonsIcons as Styled } from './moons-icons.styles';

const MOON_SIZE = 26;

export const MoonsIcons: React.FC = () => {
  return (
    <Styled.MoonsIcons>
      {MOON_ICONS.map(({ name }) => (
        <Styled.Moon key={name} moonSize={MOON_SIZE}>
          <Icon type={name} size={MOON_SIZE} />
        </Styled.Moon>
      ))}
    </Styled.MoonsIcons>
  );
};
