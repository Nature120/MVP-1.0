import React from 'react';

import { Icon } from '@components/atoms/icon';

import { ICheckBoxProps } from './check-box.typings';

import { StyledCheckBox as Styled } from './check-box.styles';

export const CheckBox: React.FC<ICheckBoxProps> = props => {
  const { isCheckBoxActive, toggleCheckBox } = props;

  return (
    <Styled.CheckBox isCheckBoxActive={isCheckBoxActive} onPress={toggleCheckBox}>
      {isCheckBoxActive && <Icon height={11} width={12} type="checkbox" />}
    </Styled.CheckBox>
  );
};
