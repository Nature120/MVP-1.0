import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component';
import { Title } from '@components/atoms/title';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const MainInfoSectionStyled = {
  Container: styled.View<{ isLockPractice: boolean | undefined }>`
    flex: 1;
    margin-bottom: ${({ isLockPractice }) => (isLockPractice ? 0 : 32)}px;
  `,
  BookmarkBtn: css`
    margin-top: 20px;
    margin-bottom: 15px;
    align-self: flex-end;
  `,
  TitleWrapper: styled.View`
    flex-direction: row;
  `,
  Title: styled(Title)`
    width: ${moderateScale(280)}px;
    margin-bottom: 20px;
  `,
  Description: styled(TextComponent)`
    margin-top: 40px;
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 26px;
    color: ${COLOR.subheading};
  `,
  LockSvg: css`
    margin-right: 16px;
  `,
};
