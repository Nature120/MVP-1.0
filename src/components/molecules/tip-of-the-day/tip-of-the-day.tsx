import React from 'react';

import { Icon } from '@components/atoms/icon';
import { useTipOfTheDay } from './tip-of-the-day.state';

import { ITipOfTheDayProps } from './tip-of-the-day.typings';

import { StyledTipOfTheDay as Styled } from './tip-of-the-day.styles';

export const TipOfTheDay: React.FC<ITipOfTheDayProps> = ({ userTipOfTheDay }) => {
  const { tipOfTheDayState } = useTipOfTheDay(userTipOfTheDay);

  return (
    <Styled.TipOfTheDay>
      <Styled.Header>
        <Icon type="tip" colorIcon="green" width={24} height={22} />
        <Styled.Title>{tipOfTheDayState?.title}</Styled.Title>
      </Styled.Header>
      <Styled.Text>{tipOfTheDayState?.body}</Styled.Text>
    </Styled.TipOfTheDay>
  );
};
