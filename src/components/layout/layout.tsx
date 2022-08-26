import React from 'react';
import { ILayoutProps } from './layout.typings';
import { StyledLayout as Styled } from './layout.styles';
import { Gradient } from '@components/gradient';
import { IMAGES, TImageNames } from '@constants/images';
import { COLOR } from '@theme/colors';
import { ScrollView } from 'react-native';

export const Layout: React.FC<ILayoutProps> = props => {
  const {
    children,
    ellipseColor,
    bgColor,
    isWithGradient,
    isWithoutMargin,
    isWithScroll,
    ...gradientProps
  } = props;

  const ScreenLayout = (
    <>
      <Styled.Layout
        isWithoutMargin={isWithoutMargin}
        bgColor={bgColor}
        style={{
          backgroundColor: bgColor && COLOR.background[bgColor],
        }}>
        {isWithScroll ? <ScrollView>{children}</ScrollView> : children}
      </Styled.Layout>
      {ellipseColor && (
        <Styled.Ellipse
          source={IMAGES[`ellipse-${ellipseColor}` as TImageNames]}
        />
      )}
    </>
  );

  return isWithGradient ? (
    <Gradient {...gradientProps}>{ScreenLayout}</Gradient>
  ) : (
    ScreenLayout
  );
};
