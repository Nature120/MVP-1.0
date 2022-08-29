import styled from 'styled-components/native';

import { IStyledLayoutProps } from './layout.typings';

import { COLOR } from '@theme/colors';

export const StyledLayout = {
  Layout: styled.SafeAreaView<IStyledLayoutProps>`
    z-index: 1;
    flex: 1;
    background-color: ${props => (props.bgColor ? COLOR.background[props.bgColor] : 'transparent')};
  `,

  ScrollContainer: styled.ScrollView`
    flex: 1;
  `,
  StaticContainer: styled.View`
    flex: 1;
  `,
  Container: styled.View<{ isWithoutMargin?: boolean }>`
    flex: 1;
    margin-horizontal: ${props => (props.isWithoutMargin ? 0 : '24px')};
  `,

  Ellipse: styled.Image`
    position: absolute;
    width: 100%;
    height: 310px;
    bottom: 0;
    z-index: 0;
  `,
};
