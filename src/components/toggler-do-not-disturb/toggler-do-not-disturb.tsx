import React from 'react';

import { Icon } from '@components/icon';
import { Toggler } from '@components/toggler/toggler';

import { ITogglerDoNotDisturbProps } from './toggler-do-not-disturb.typings';

import { StyledTogglerDoNotDisturb as Styled } from './toggler-do-not-disturb.styles';
export const TogglerDoNotDisturb: React.FC<ITogglerDoNotDisturbProps> = props => {
  const { isDoNotDisturb, setIsDoNotDisturb, mb } = props;
  return (
    <Styled.TogglerWrapper mb={mb}>
      <Toggler
        value={isDoNotDisturb}
        onChange={setIsDoNotDisturb}
        switchLabel={
          <Styled.DoNotDisturbWrapper>
            <Icon type="mute" colorIcon="cloudyGreen" width={15} height={18} />
            <Styled.DoNotDisturb>Do Not Disturb</Styled.DoNotDisturb>
          </Styled.DoNotDisturbWrapper>
        }
      />
    </Styled.TogglerWrapper>
  );
};