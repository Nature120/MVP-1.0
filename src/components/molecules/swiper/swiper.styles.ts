import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

const { View: AView } = Animated;

export const SwipeStyles = {
  Container: styled(LinearGradient)`
    width: 100%;
    height: 72px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
  `,
  Arrow: styled(AView)`
    position: absolute;
    width: 62px;
    height: 62px;
    left: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: ${COLOR.primary.red};
  `,
  Text: styled.Text`
    font-family: ${FONTS.family.mediumAcumin};
    font-size: ${FONTS.size.xMedium}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.font.darkBlue};
    line-height: 21.6px;
    letter-spacing: 5px;
  `,
};
