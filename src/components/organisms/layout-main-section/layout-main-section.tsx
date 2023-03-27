import React from 'react';

import { ILayoutProps } from '@typings/layout.typings';

import { LayoutMainSectionStyled as Styled } from './layout-main-section.styles';

export const LayoutMainSection: React.FC<ILayoutProps> = ({ children, cssStyles }) => {
  return <Styled.MainWrapper cssStyles={cssStyles}>{children}</Styled.MainWrapper>;
};
