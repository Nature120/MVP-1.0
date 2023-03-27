import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';

export const TeacherProfileMainStyled = {
  Container: css`
    background-color: ${COLOR.background.darkWhite};
    padding-horizontal: 0px;
  `,
  ContentWrapper: styled.View`
    flex: 1;
    margin-top: 40px;
    padding-horizontal: 24px;
  `,
};
