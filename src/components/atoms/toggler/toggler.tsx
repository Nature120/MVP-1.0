import React from 'react';
import { Switch } from 'react-native-switch';

import { ITogglerProps } from './toggler.typings';

import { StyledToggler as Styled } from './toggler.styles';

import { COLOR } from '@theme/colors';

export const Toggler: React.FC<ITogglerProps> = props => {
  const { onChange, value, switchLabel } = props;
  return (
    <Styled.Toggler>
      {switchLabel}

      <Switch
        value={value}
        onValueChange={onChange}
        disabled={false}
        circleSize={16}
        barHeight={28.4}
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
