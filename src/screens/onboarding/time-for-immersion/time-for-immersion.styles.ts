import styled from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { OnboardingText } from '@theme/components';

export const StyledTimeForImmersion = {
  CheckboxGroup: styled.View`
    margin: 24px 0;
  `,

  Text: styled(OnboardingText)`
    margin-top: 39px;
    font-size: 25px;
    line-height: 41px;
    letter-spacing: 2.5px;
    color: ${COLOR.subheading};
  `,

  ReminderContainer: styled.View`
    margin: 24px 0;
  `,

  SingleCheckBoxWrapper: styled.View`
    margin-bottom: 24px;
  `,

  TimePickerContainer: styled.View`
    margin-top: ${isIOS ? -5 : 0}px;
  `,
};
