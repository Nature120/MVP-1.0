import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { TextComponent } from '@theme/components/text';
import { FONTS } from '@theme/fonts';

export const StyledTipOfTheDay = {
  TipOfTheDay: styled.View`
    background: #eee5de;
    border-radius: 15px;
    padding: 16px;
    width: 100%;
    margin: 12px 0 24px;
  `,

  Line: styled.View`
    margin-top: 12px;
    width: 100%;
    height: 1px;
    background-color: ${COLOR.background.textInput};
  `,

  Header: styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
  `,

  Title: styled.Text`
    line-height: 20px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xMedium}px;
    color: ${COLOR.font.darkBlue};
    margin-left: 16px;
  `,

  Text: styled(TextComponent)`
    font-size: 13px;
    line-height: 16px;
    color: ${COLOR.subheading};
  `,
};
