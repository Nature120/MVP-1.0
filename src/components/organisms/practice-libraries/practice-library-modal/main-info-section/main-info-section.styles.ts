import styled, { css } from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component';
import { Title } from '@components/atoms/title';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const MainInfoSectionStyled = {
  BookmarkBtn: styled.TouchableOpacity`
    margin-top: 20px;
    margin-bottom: 15px;
    align-items: flex-end;
  `,
  TitleWrapper: styled.View`
    flex-direction: row;
  `,
  Title: styled(Title)`
    max-width: 300px;
    margin-bottom: 20px;
  `,
  Description: styled(TextComponent)<{ isFirst: boolean }>`
    margin-top: ${props => (props.isFirst ? 0 : 20)}px;
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 26px;
    color: ${COLOR.subheading};
  `,
  LockSvg: css`
    margin-right: 16px;
  `,
};
