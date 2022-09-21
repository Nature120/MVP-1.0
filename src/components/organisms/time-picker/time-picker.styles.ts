import styled from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledTimePicker = {
  TimePickerButton: styled.TouchableOpacity`
    top: ${!isIOS ? 12 : 0}px;
    margin-left: 15px;
    background: ${COLOR.primary.milk};
    border: 1px solid ${COLOR.primary.blue};
    border-radius: 5px;
    width: 160px;
    height: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
  `,

  TimeText: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.xMedium}px;
    line-height: 21px;
    letter-spacing: 2px;
    color: ${COLOR.primary.blue};
  `,

  TimePicker: styled.View`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  `,

  TimerButtonWrapper: styled.View`
    width: 100%;
    margin: 10px 0;
  `,
};
