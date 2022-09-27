import React from 'react';

import { Icon } from '@components/atoms/icon';
import { useTipOfTheDay } from './tip-of-the-day.state';

import { StyledTipOfTheDay as Styled } from './tip-of-the-day.styles';

import { Line } from '@theme/components';

export const TipOfTheDay: React.FC = () => {
  const { tipOfTheDayState } = useTipOfTheDay();

  return (
    <>
      <Line marginTop={12} />
      <Styled.TipOfTheDay>
        <Styled.Header>
          <Icon type="tip" colorIcon="green" width={24} height={22} />
          <Styled.Title>{tipOfTheDayState?.title}</Styled.Title>
        </Styled.Header>
        <Styled.Text>{tipOfTheDayState?.body}</Styled.Text>
      </Styled.TipOfTheDay>
    </>
  );
};
