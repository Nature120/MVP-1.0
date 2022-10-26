import styled from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledTogglerDoNotDisturb = {
  TogglerWrapper: styled.View<{ marginBottom?: number; marginTop?: number }>`
    margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)}px;
    margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
  `,

  DoNotDisturbWrapper: styled.View`
    flex-direction: row;
    align-items: center;
  `,

  TextHint: styled(TextComponent)`
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 19px;
    color: ${COLOR.subheading};
  `,

  DoNotDisturb: styled(TextComponent)<{ isDark?: boolean }>`
    margin-left: 16px;
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xMedium}px;
    line-height: 21px;
    color: ${props => (props.isDark ? COLOR.font.darkBlue : COLOR.font.cloudyBlue)};
  `,
};
