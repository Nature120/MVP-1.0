import React from 'react';

import { Icon } from '@components/atoms/icon';
import { Toggler } from '@components/atoms/toggler/toggler';

import { ITogglerDoNotDisturbProps } from './toggler-do-not-disturb.typings';

import { StyledTogglerDoNotDisturb as Styled } from './toggler-do-not-disturb.styles';
export const TogglerDoNotDisturb: React.FC<ITogglerDoNotDisturbProps> = props => {
  const { isDoNotDisturb, setIsDoNotDisturb, marginBottom, marginTop, isDark } = props;
  return (
    <Styled.TogglerWrapper marginBottom={marginBottom} marginTop={marginTop}>
      <Toggler
        value={isDoNotDisturb}
        onChange={setIsDoNotDisturb}
        switchLabel={
          <Styled.DoNotDisturbWrapper>
            <Icon type="mute" colorIcon={isDark ? 'darkBlue' : 'cloudyGreen'} width={15} height={18} />
            <Styled.DoNotDisturb isDark={isDark}>Do Not Disturb</Styled.DoNotDisturb>
          </Styled.DoNotDisturbWrapper>
        }
      />
    </Styled.TogglerWrapper>
  );
};
