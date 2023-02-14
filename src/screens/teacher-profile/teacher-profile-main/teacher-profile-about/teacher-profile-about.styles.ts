import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const TeacherProfileAboutStyled = {
  BioWrapper: styled.View`
    flex: 1;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom-width: 1px;
    border-bottom-color: ${COLOR.background.textInput};
    border-bottom-style: solid;
  `,
  Text: styled.Text<{ isUnderLine?: boolean }>`
    font-family: ${FONTS.family.lightBoreal};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 18.75px;
    color: ${COLOR.subheading};
    text-decoration-line: ${({ isUnderLine }) => (isUnderLine ? 'underline' : 'none')};
  `,
  Wrapper: styled.View<{ isLastChild?: boolean }>`
    flex-direction: row;
    margin-bottom: ${({ isLastChild }) => (isLastChild ? 0 : 24)}px;
  `,
  RightWrapper: styled.View`
    flex-direction: column;
    margin-left: 8px;
  `,
  TitleText: styled.Text<{ isLastChild?: boolean }>`
    margin-bottom: ${({ isLastChild }) => (isLastChild ? 0 : 8)}px;
    margin-left: ${({ isLastChild }) => (isLastChild ? 8 : 0)}px;
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 19px;
    color: ${COLOR.subheading};
  `,
  LinkButton: styled.TouchableOpacity<{ isLastItem: boolean }>`
    margin-bottom: ${({ isLastItem }) => (!isLastItem ? 0 : 16)}px;
  `,
};
