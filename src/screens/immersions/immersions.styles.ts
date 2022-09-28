import styled from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component';
import { Title } from '@components/atoms/title';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';
import { Z_INDEX } from '@theme/z-index';

export const StyledImmersions = {
  Wrapper: styled.View`
    flex: 1;
  `,

  LayoutContent: styled.View`
    flex: 1;
    background-color: ${COLOR.background.white};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  `,

  Immersions: styled.View`
    margin-horizontal: 24px;
  `,

  Header: styled.View`
    align-items: flex-end;
    margin-top: 24px;
    margin-right: 10px;
  `,

  Title: styled(Title)`
    font-size: ${FONTS.size.large}px;
    line-height: 29px;
    margin: 18px 0 8px;
    max-width: 70%;
  `,

  SubTitle: styled(TextComponent)`
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 19px;
    color: ${COLOR.subheading};
  `,

  SafeAreaView: styled.SafeAreaView`
    z-index: ${Z_INDEX.alwaysTop};
  `,

  ButtonWrapper: styled.View`
    padding: 24px;
    background-color: ${COLOR.background.white};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    box-shadow: 0px -10px 7px rgba(0, 0, 0, 0.1);
  `,
};
