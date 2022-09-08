import React, { useMemo, useState } from 'react';
import DatePicker from 'react-native-date-picker';

import { Button } from '@components/button';
import { Icon } from '@components/icon';
import { ModalBottom } from '@components/modal-bottom';

import { getMinMaxDate } from '@services/helpers/utils';

import { timeString12hr } from './time-picker.constants';

import { ITimePickerProps } from './time-picker.typings';

import { StyledTimePicker as Styled } from './time-picker.styles';

import { COLOR } from '@theme/colors';

export const TimePicker: React.FC<ITimePickerProps> = ({ period, time, setTime }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(time);
  const { minimumDate, maximumDate } = useMemo(() => getMinMaxDate(period), [period]);

  const onToggleOpen = () => setIsOpen(prev => !prev);

  const onButtonPress = () => {
    setTime(timer);
    onToggleOpen();
  };

  return (
    <>
      <Styled.TimePickerButton onPress={onToggleOpen}>
        <Styled.TimeText>{timeString12hr(time)}</Styled.TimeText>
        <Icon type="arrowDown" size={24} colorIcon={'blue'} />
      </Styled.TimePickerButton>

      <ModalBottom isVisible={isOpen} onClose={onToggleOpen}>
        <Styled.TimePicker>
          <DatePicker
            date={timer}
            onDateChange={setTimer}
            mode="time"
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            textColor={COLOR.text}
          />
          <Styled.TimerButtonWrapper>
            <Button buttonText="continue" onPress={onButtonPress} />
          </Styled.TimerButtonWrapper>
        </Styled.TimePicker>
      </ModalBottom>
    </>
  );
};
