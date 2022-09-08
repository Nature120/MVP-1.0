import { useState } from 'react';
import { Animated, Easing, LayoutChangeEvent, PanResponder } from 'react-native';

export const useSwipeToEnd = (onEndReached: () => void) => {
  const [thumbWidth, setThumbWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const offsetX = new Animated.Value(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const margin = totalWidth - thumbWidth * 1.025;
      if (gestureState.dx > 0 && gestureState.dx <= margin) {
        offsetX.setValue(gestureState.dx);
      } else if (gestureState.dx > margin) {
        onEndReached();
        return resetBar();
      }
    },
    onPanResponderRelease: () => resetBar(),
  });

  const resetBar = () => {
    Animated.timing(offsetX, {
      toValue: 0,
      useNativeDriver: true,
      duration: 500,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  const onContainerLayout = (event: LayoutChangeEvent) => setTotalWidth(event.nativeEvent.layout.width);
  const onThumbLayout = (event: LayoutChangeEvent) => setThumbWidth(event.nativeEvent.layout.width);

  return {
    offsetX,
    panResponder,
    onContainerLayout,
    onThumbLayout,
  };
};
