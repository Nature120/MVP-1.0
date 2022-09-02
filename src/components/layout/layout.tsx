import React from 'react';

import { Gradient } from '@components/gradient';

import { IMAGES, TImageNames } from '@constants/images';

import { ILayoutProps } from './layout.typings';

import { contentContainerStyle, StyledLayout as Styled } from './layout.styles';

export const Layout: React.FC<ILayoutProps> = props => {
  const { children, ellipseColor, bgColor, isWithGradient, isWithoutMargin, isWithScroll, ...gradientProps } = props;

  const Container = <Styled.Container isWithoutMargin={isWithoutMargin}>{children}</Styled.Container>;

  const ScreenLayout = (
    <>
      <Styled.Layout bgColor={bgColor}>
        {isWithScroll ? (
          <Styled.ScrollContainer contentContainerStyle={contentContainerStyle}>{Container}</Styled.ScrollContainer>
        ) : (
          <Styled.StaticContainer>{Container}</Styled.StaticContainer>
        )}
      </Styled.Layout>
      {ellipseColor && <Styled.Ellipse source={IMAGES[`ellipse-${ellipseColor}` as TImageNames]} />}
    </>
  );

  return isWithGradient ? <Gradient {...gradientProps}>{ScreenLayout}</Gradient> : ScreenLayout;
};
