import styled from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component';

import { FONTS } from '@theme/fonts';

export const StyledPicker = {
  PickerWrapper: styled.View<{ itemWidth: number }>`
    width: ${({ itemWidth }) => itemWidth}px;
    justify-content: center;
    align-items: center;
  `,

  PickerTime: styled(TextComponent)`
    font-size: ${FONTS.size.xlLarge}px;
    line-height: ${FONTS.size.xlLarge}px;
  `,
};
