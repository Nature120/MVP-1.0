import React from 'react';

import { COLOR } from '@theme/colors';
import { StyledToggler as Styled } from './toggler.styles';
import { ITogglerProps } from './toggler.typings';

export const Toggler: React.FC<ITogglerProps> = props => {
  const { onChange, value, switchLabel } = props;
  return (
    <Styled.Toggler>
      {switchLabel}

      <Styled.Switch
        value={value}
        onValueChange={onChange}
        disabled={false}
        circleSize={20}
        barHeight={36.25}
        backgroundActive={COLOR.primary.lightGreen}
        backgroundInactive={COLOR.primary.lightGray}
        changeValueImmediately={true}
        circleBorderWidth={0}
        renderActiveText={false}
        renderInActiveText={false}
        switchWidthMultiplier={3}
        switchBorderRadius={18}
      />
    </Styled.Toggler>
  );
};