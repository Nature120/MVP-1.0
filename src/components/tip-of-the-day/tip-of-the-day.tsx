import React, { useEffect, useState } from 'react';

import { Icon } from '@components/icon';

import { StyledTipOfTheDay as Styled } from './tip-of-the-day.styles';

const mockText =
  'A minimum of 120 minutes per week spent in contact with natural environments has been scientifically shown to correlate with physiological, emotional, and psychological benefits';

export const TipOfTheDay: React.FC = () => {
  const [tipText, setTipText] = useState('');

  useEffect(() => {
    //fetch tip text
    setTipText(mockText);
  }, []);

  return (
    <>
      <Styled.Line />
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
