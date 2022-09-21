import React, { useEffect, useState } from 'react';

import { Icon } from '@components/atoms/icon';

import { databaseRef } from '@services/api.service';

import { StyledTipOfTheDay as Styled } from './tip-of-the-day.styles';

import { Line } from '@theme/components';

const WEEKDAY = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;

export const TipOfTheDay: React.FC = () => {
  const [tipText, setTipText] = useState('');

  useEffect(() => {
    const getTipOfTheDay = async () => {
      const response = await databaseRef('Other text').doc('Tip of the day').get();
      const allTips = response.data();
      if (allTips) {
        const today = new Date().getDay();
        const tip = allTips[WEEKDAY[today]];
        setTipText(tip);
      }
    };

    getTipOfTheDay();
  }, []);

  return (
    <>
      <Line mt={12} />
      <Styled.TipOfTheDay>
        <Styled.Header>
          <Icon type="tip" colorIcon="green" width={24} height={22} />
          <Styled.Title>Tip of the Day</Styled.Title>
        </Styled.Header>
        <Styled.Text>{tipText}</Styled.Text>
      </Styled.TipOfTheDay>
    </>
  );
};
