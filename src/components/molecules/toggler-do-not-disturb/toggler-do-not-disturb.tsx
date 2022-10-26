import React from 'react';
import { useSelector } from 'react-redux';

import { Icon } from '@components/atoms/icon';
import { Toggler } from '@components/atoms/toggler/toggler';
import { useTogglerDoNotDisturb } from './toggler-do-not-disturb.state';

import { isIOS } from '@services/helpers/device-utils';
import { getIsDisturb } from '@services/store/auth/auth.selectors';

import { ITogglerDoNotDisturbProps } from './toggler-do-not-disturb.typings';

import { StyledTogglerDoNotDisturb as Styled } from './toggler-do-not-disturb.styles';

export const TogglerDoNotDisturb: React.FC<ITogglerDoNotDisturbProps> = props => {
  const { marginBottom, marginTop, isDark } = props;
  const { onChange } = useTogglerDoNotDisturb();
  const isDisturb = useSelector(getIsDisturb);

  return (
    <Styled.TogglerWrapper marginBottom={marginBottom} marginTop={marginTop}>
      {isIOS ? (
        isDisturb && (
          <Styled.TextHint>
            Use Flight Mode or the Silent mode on your device to avoid interruptions and make your Nature immersion more
            powerful.
          </Styled.TextHint>
        )
      ) : (
        <Toggler
          value={isDisturb}
          onChange={onChange}
          switchLabel={
            <Styled.DoNotDisturbWrapper>
              <Icon type="mute" colorIcon={isDark ? 'darkBlue' : 'cloudyGreen'} width={15} height={18} />
              <Styled.DoNotDisturb isDark={isDark}>Do Not Disturb</Styled.DoNotDisturb>
            </Styled.DoNotDisturbWrapper>
          }
        />
      )}
    </Styled.TogglerWrapper>
  );
};
