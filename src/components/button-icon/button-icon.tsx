import React from 'react';

import { Icon } from '@components/icon';

import { IButtonIconProps } from './button-icon.typings';

import { StyledButtonIcon as Styled } from './button-icon.styles';

const hitSlop = { top: 10, bottom: 10, left: 10, right: 10 };

export const ButtonIcon: React.FC<IButtonIconProps> = props => {
  const { onPress, isWithBg, ...iconProps } = props;
  return (
    <Styled.ButtonIcon isWithBg={isWithBg} onPress={onPress} size={iconProps.size} hitSlop={hitSlop}>
      <Icon {...iconProps} />
    </Styled.ButtonIcon>
  );
};
