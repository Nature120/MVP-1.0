import React from 'react';

import { Icon } from '@components/atoms/icon';

import { IButtonIconProps } from './button-icon.typings';

import { StyledButtonIcon as Styled } from './button-icon.styles';

const hitSlop = { top: 10, bottom: 10, left: 10, right: 10 };

export const ButtonIcon: React.FC<IButtonIconProps> = props => {
  const { onPress, isWithBg, size, iconIndent = 0, isDisabled, ...iconProps } = props;
  return (
    <Styled.ButtonIcon
      isWithBg={isWithBg}
      onPress={onPress}
      size={size}
      hitSlop={hitSlop}
      activeOpacity={0.8}
      disabled={isDisabled}>
      <Icon {...iconProps} size={isWithBg && size ? size - iconIndent * 2 : size} />
    </Styled.ButtonIcon>
  );
};
