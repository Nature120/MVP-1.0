import React from 'react';

import { Icon } from '@components/atoms/icon';
import { useLeafButtonState } from './leaf-button.state';

import { IProp } from './leaf-button.typings';

import { LeafButtonStyled as Styled } from './leaf-button.styles';

export const LeafButton = ({ library, cssButton, width, height }: IProp) => {
  const { onToggleBookMark, toggleBookMark } = useLeafButtonState(library);

  return (
    <Styled.LeafButton onPress={onToggleBookMark} cssButton={cssButton}>
      <Icon type={toggleBookMark ? 'checked_leaf' : 'unchecked_leaf'} width={width} height={height} />
    </Styled.LeafButton>
  );
};
