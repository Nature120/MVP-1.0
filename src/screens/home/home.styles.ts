import styled from 'styled-components/native';

import { Title } from '@components/atoms/title';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledHome = {
  MainSection: styled.View`
    flex: 1;
    margin-horizontal: 24px;
  `,

  Greeting: styled(Title)`
    font-weight: ${FONTS.weight.bold};
    font-size: ${FONTS.size.large}px;
    line-height: 29px;
    margin: 16px 0 8px;
  `,

  ButtonWrapper: styled.View`
    margin: 36px 0;
  `,

  InfoSectionWrapper: styled.View`
    padding: 36px 0 24px;
    background-color: ${COLOR.background.white};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  `,

  InfoSection: styled.View`
    margin-horizontal: 24px;
  `,
};
