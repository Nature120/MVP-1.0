import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { TextComponent } from '@theme/components';
import { FONTS } from '@theme/fonts';

export const StyledTogglerDoNotDisturb = {
  TogglerWrapper: styled.View<{ mb?: number }>`
    margin-bottom: ${props => (props.mb ? props.mb : 0)}px;
  `,

  DoNotDisturbWrapper: styled.View`
    flex-direction: row;
    align-items: center;
  `,

  DoNotDisturb: styled(TextComponent)`
    margin-left: 16px;
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xMedium}px;
    line-height: 21px;
    color: ${COLOR.font.cloudyBlue};
  `,
};
