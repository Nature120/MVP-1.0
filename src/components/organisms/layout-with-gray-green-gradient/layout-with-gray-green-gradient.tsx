import React from 'react';
import { ScrollView, ViewStyle } from 'react-native';

import { isIOS } from '@services/helpers/device-utils';

import { IMAGES } from '@constants/images';

import { ILayoutProps } from '@typings/layout.typings';

import { LayoutWithGrayGreenGradientStyled as Styled } from './layout-with-gray-green-gradient.styles';

export const LayoutWithGrayGreenGradient: React.FC<ILayoutProps> = ({ children, handleScroll }) => {
  const scrollViewStyls: ViewStyle = { flexGrow: 1 };
  return (
    <>
      {isIOS ? (
        <ScrollView
          contentContainerStyle={scrollViewStyls as ViewStyle}
          onMomentumScrollEnd={({ nativeEvent }) => {
            if (!handleScroll) {
              return;
            }
            handleScroll(nativeEvent);
          }}
          scrollEventThrottle={1000}>
          <Styled.Image source={IMAGES.grayGreenBgGradient} />
          <Styled.Wrapper>{children}</Styled.Wrapper>
        </ScrollView>
      ) : (
        <ScrollView
          contentContainerStyle={scrollViewStyls as ViewStyle}
          onScroll={({ nativeEvent }) => {
            if (!handleScroll) {
              return;
            }
            handleScroll(nativeEvent);
          }}
          scrollEventThrottle={1000}>
          <Styled.Image source={IMAGES.grayGreenBgGradient} />
          <Styled.Wrapper>{children}</Styled.Wrapper>
        </ScrollView>
      )}
    </>
  );
};
