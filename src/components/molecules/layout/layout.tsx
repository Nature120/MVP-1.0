import React from 'react';

import { Gradient } from '@components/atoms/gradient';

import { isIOS } from '@services/helpers/device-utils';

import { IMAGES, TImageNames } from '@constants/images';

import { ILayoutProps } from './layout.typings';

import { contentContainerStyle, StyledLayout as Styled } from './layout.styles';

export const Layout: React.FC<ILayoutProps> = props => {
  const {
    children,
    ellipseColor,
    bgColor,
    isWithGradient,
    isWithoutMargin,
    isWithScroll,
    elasticScrollColor,
    elasticScrollPosition = 'top',
    isScrollVisible = false,
    topBottomColors,
    ...gradientProps
  } = props;

  const Container = <Styled.Container isWithoutMargin={isWithoutMargin}>{children}</Styled.Container>;

  const ScreenLayout = (
    <>
      {topBottomColors && <Styled.SafeAreaViewHeader topColor={topBottomColors[0]} />}
      <Styled.Layout bottomColor={topBottomColors ? topBottomColors[1] : ''} bgColor={bgColor}>
        {isWithScroll ? (
          <Styled.ScrollContainer
            contentContainerStyle={contentContainerStyle}
            showsVerticalScrollIndicator={isScrollVisible}>
            {isIOS && elasticScrollColor && (
              <Styled.ElasticScrollView
                elasticScrollColor={elasticScrollColor}
                elasticScrollPosition={elasticScrollPosition}
              />
            )}
            {Container}
          </Styled.ScrollContainer>
        ) : (
          <Styled.StaticContainer>{Container}</Styled.StaticContainer>
        )}
      </Styled.Layout>
      {ellipseColor && <Styled.Ellipse source={IMAGES[`ellipse-${ellipseColor}` as TImageNames]} />}
    </>
  );

  return isWithGradient ? <Gradient {...gradientProps}>{ScreenLayout}</Gradient> : ScreenLayout;
};
