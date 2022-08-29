import styled from 'styled-components/native';

import { OnboardingText } from '@theme/components';

export const StyledTimeForImmersion = {
  CheckboxGroup: styled.View`
    margin-top: 24px;
  `,

  Text: styled(OnboardingText)`
    margin-top: 39px;
    font-size: 25px;
    line-height: 31px;
    letter-spacing: 2.5px;
    color: #254660;
  `,
  ReminderContainer: styled.View`
    margin-top: 12px;
  `,
};
