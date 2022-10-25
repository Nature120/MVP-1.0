import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import { OnboardingText } from '@components/atoms/onboarding-text/onboarding-text';

import { COLOR } from '@theme/colors';

export const pdfStyles: StyleProp<ViewStyle> = {
  flex: 1,
  backgroundColor: COLOR.background.white,
};

export const StyledTermsOfServices = {
  TermsOfServices: styled.View`
    flex: 1;
    padding-horizontal: 24px;
  `,

  Header: styled.SafeAreaView`
    margin-vertical: 12px;
    flex-direction: row;
    align-items: center;
  `,

  Title: styled(OnboardingText)`
    margin-left: 24px;
  `,
};
