import React from 'react';

import { Icon, MOON_ICONS } from '@components/atoms/icon';

import { StyledMoonsIcons as Styled } from './moons-icons.styles';

const MOON_SIZE = 26;

export const MoonsIcons: React.FC = () => {
  return (
    <Styled.MoonsIcons>
      {MOON_ICONS.map(type => (
        <Styled.Moon key={type} moonSize={MOON_SIZE}>
          <Icon type={type} size={MOON_SIZE} />
        </Styled.Moon>
      ))}
    </Styled.MoonsIcons>
  );
};
