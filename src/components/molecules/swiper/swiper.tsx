import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { Icon } from '@components/atoms/icon';
import { useSwiperState } from './swiper.state';

import { GRADIENT_CONFIG } from './swiper.constants';

import { IProp } from './swiper.typings';

import { SwipeStyles as Styled } from './swiper.styles';

const { View: AView } = Animated;

export const Swiper: React.FC<IProp> = ({ toggleOpenAskModal, text, marginW, marginBottom, marginTop }) => {
  const { textAnimatedStyles, arrowAnimatedStyles, onGestureHandle } = useSwiperState({ marginW, toggleOpenAskModal });

  return (
    <Styled.Container {...GRADIENT_CONFIG} marginBottom={marginBottom} marginTop={marginTop}>
      <AView style={textAnimatedStyles}>
        <Styled.Text>{text}</Styled.Text>
      </AView>
      <PanGestureHandler onGestureEvent={onGestureHandle} onHandlerStateChange={onGestureHandle}>
        <Styled.Arrow style={arrowAnimatedStyles}>
          <Icon type="swipeToEndArrow" width={33} height={28} colorIcon="white" />
        </Styled.Arrow>
      </PanGestureHandler>
    </Styled.Container>
  );
};
