import styled from 'styled-components/native';

import { OnboardingText } from '@components/atoms/onboarding-text/onboarding-text';

import { TStyles } from '@typings/common';

import { COLOR } from '@theme/colors';

export const pdfStyles: TStyles = {
  flex: 1,
  backgroundColor: COLOR.background.white,
};

export const StyledPrivacyPolicy = {
  PrivacyPolicy: styled.View`
    flex: 1;
    padding-horizontal: 24px;
  `,

  Header: styled.SafeAreaView`
    margin-bottom: 24px;
    flex-direction: row;
  `,

  Title: styled(OnboardingText)`
    margin-left: 24px;
  `,
};
