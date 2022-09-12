import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { TextComponent, Title } from '@theme/components';
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

  MotivationText: styled(TextComponent)`
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 19px;
    color: ${COLOR.subheading};
    margin-bottom: 16px;
    max-width: 70%;
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
