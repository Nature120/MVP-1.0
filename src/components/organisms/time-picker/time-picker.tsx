import React, { useMemo, useState } from 'react';
import DatePicker from 'react-native-date-picker';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { ModalBottom } from '@components/molecules/modal-bottom';

import { timeString12hr } from './time-picker.utils';
import { getMinMaxDate } from '@services/helpers/utils';
import { useOpenCloseModal } from '@services/hooks/open-close';

import { ITimePickerProps } from './time-picker.typings';

import { StyledTimePicker as Styled } from './time-picker.styles';

import { COLOR } from '@theme/colors';

export const TimePicker: React.FC<ITimePickerProps> = ({ period, time, setTime }) => {
  const { isOpen, onToggle } = useOpenCloseModal();
  const [timer, setTimer] = useState(time);
  const { minimumDate, maximumDate } = useMemo(() => getMinMaxDate(period), [period]);

  const onButtonPress = () => {
    setTime(timer);
    onToggle();
  };

  return (
    <>
      <Styled.TimePickerButton onPress={onToggle}>
        <Styled.TimeText>{timeString12hr(time)}</Styled.TimeText>
        <Icon type="arrowDown" size={24} colorIcon={'blue'} />
      </Styled.TimePickerButton>

      <ModalBottom isVisible={isOpen} onClose={onToggle}>
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
