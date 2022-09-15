import { Animated, TextInput } from 'react-native';
import styled from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const StyledGoalText = {
  AnimatedTextInput: styled(AnimatedTextInput)<{ textColor: string }>`
    color: ${props => props.textColor};
    padding-top: ${isIOS ? 55 : 100}px;
    text-align: center;
    font-family: ${FONTS.family.boldAcumin};
    font-weight: ${FONTS.weight.bold};
    font-size: 60px;
  `,

  Min: styled.Text<{ textColor: string }>`
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.medium};
    font-size: 28px;
    color: ${props => props.textColor};
  `,

  WeeklyGoal: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xMedium}px;
    line-height: 21px;
    text-align: center;
    color: ${COLOR.subheading};
  `,
};
