import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { Title } from '@theme/components';
import { FONTS } from '@theme/fonts';

const thumbSize = 62;

export const StyledSwipeToEnd = {
  SwipeToEnd: styled(LinearGradient)`
    border-radius: 100px;
    overflow: hidden;
    padding: 5px 3px;
  `,

  Container: styled.View`
    align-items: flex-start;
    justify-content: center;
  `,

  Circle: styled.View`
    width: ${thumbSize}px;
    height: ${thumbSize}px;
    background-color: ${COLOR.primary.red};
    border-radius: 100px;
    align-items: center;
    justify-content: center;
  `,

  TextView: styled.View`
    position: absolute;
    align-self: center;
    z-index: -1;
  `,

  Text: styled(Title)`
    font-weight: ${FONTS.weight.medium};
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 5px;
  `,
};
