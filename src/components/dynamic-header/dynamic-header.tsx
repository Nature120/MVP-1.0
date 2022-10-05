import React from 'react';

import { getHeader } from './dynamic-header.utils';

import { IDynamicHeaderProps } from './dynamic-header.typings';

import { StyledDynamicHeader as Styled } from './dynamic-header.styles';

export const DynamicHeader: React.FC<IDynamicHeaderProps> = props => {
  const { goal, weeklyGoal } = props;
  const dynamicHeader = getHeader(goal, weeklyGoal);

  return <Styled.DynamicHeader>{dynamicHeader}</Styled.DynamicHeader>;
};
