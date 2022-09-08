import React from 'react';
import { Animated } from 'react-native';

import { Icon } from '@components/icon';
import { useSwipeToEnd } from './swipe-to-end.state';

import { ISwipeToEndProps } from './swipe-to-end.typings';

import { StyledSwipeToEnd as Styled } from './swipe-to-end.styles';

const gradientConfig = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  colors: ['rgba(195, 215, 204, 0.7)', 'rgba(195, 215, 204, 0) 82.46%)'],
};

export const SwipeToEnd: React.FC<ISwipeToEndProps> = ({ onEndReached }) => {
  const { offsetX, panResponder, onContainerLayout, onThumbLayout } = useSwipeToEnd(onEndReached);

  return (
    <Styled.SwipeToEnd {...gradientConfig}>
      <Styled.Container onLayout={onContainerLayout}>
        <Animated.View
          onLayout={onThumbLayout}
          style={{ transform: [{ translateX: offsetX }] }}
          {...panResponder.panHandlers}>
          <Styled.Circle>
            <Icon type="swipeToEndArrow" colorIcon="white" width={33} height={28} />
          </Styled.Circle>
        </Animated.View>

        <Styled.TextView>
          <Styled.Text>SWIPE TO END</Styled.Text>
        </Styled.TextView>
      </Styled.Container>
    </Styled.SwipeToEnd>
  );
};
