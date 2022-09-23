import { useEffect, useMemo, useRef, useState } from 'react';
import { State } from 'react-native-gesture-handler';
import {
  add,
  block,
  call,
  cond,
  eq,
  event,
  greaterThan,
  interpolate,
  lessThan,
  set,
  useCode,
  Value,
} from 'react-native-reanimated';

import { DEVICE_WIDTH } from '@services/helpers/device-utils';

interface ISwipeState {
  marginW: number;
  toggleOpenAskModal: () => void;
}

export const useSwiperState = ({ marginW, toggleOpenAskModal }: ISwipeState) => {
  const [status, setStatus] = useState<string>('start');

  const MAX_WIDTH = DEVICE_WIDTH - (marginW + 62);

  const transX = useRef(new Value(0)).current;
  const offsetX = useRef(new Value(0)).current;

  const textAnimatedStyles = {
    opacity: interpolate(transX, { inputRange: [0, MAX_WIDTH / 2, MAX_WIDTH], outputRange: [2, 0, 1] }),
  };

  const arrowAnimatedStyles = { transform: [{ translateX: transX }] };

  useEffect(() => {
    if (status === 'finish') {
      toggleOpenAskModal();
    }
  }, [status]);

  useCode(
    () => [
      call([transX], ([value]) => {
        if (value === MAX_WIDTH) {
          setStatus('finish');
        } else if (value === 0) {
          setStatus('start');
        }
      }),
    ],
    [transX],
  );

  const onGestureHnadle = useMemo(() => {
    return event([
      {
        nativeEvent: ({ translationX: x, state }: any) =>
          block([
            cond(lessThan(add(offsetX, x), 0), set(transX, 0), [
              cond(greaterThan(add(offsetX, x), MAX_WIDTH), set(transX, MAX_WIDTH), set(transX, add(offsetX, x))),
            ]),
            cond(eq(state, State.END), [
              cond(block([set(transX, 0), set(offsetX, 0)]), block([set(transX, MAX_WIDTH), set(offsetX, MAX_WIDTH)])),
            ]),
          ]),
      },
    ]);
  }, [transX, offsetX]);

  return { textAnimatedStyles, arrowAnimatedStyles, onGestureHnadle };
};
