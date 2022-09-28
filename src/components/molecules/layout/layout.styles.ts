import styled, { css } from 'styled-components/native';

import { IElasticScrollViewProps, IStyledLayoutProps } from './layout.typings';

import { COLOR } from '@theme/colors';
import { Z_INDEX } from '@theme/z-index';

export const contentContainerStyle = { flexGrow: 1 };

const spacerHeight = 1000;

type TLayoutProps = {
  bottomColor: string;
} & IStyledLayoutProps;

export const StyledLayout = {
  SafeAreaViewHeader: styled.SafeAreaView<{ topColor?: string }>`
    flex: 0;
    background-color: ${props => (props.topColor ? props.topColor : 'transparent')};
  `,

  Layout: styled.SafeAreaView<TLayoutProps>`
    z-index: ${Z_INDEX.visible};
    flex: 1;
    ${props =>
      props.bottomColor
        ? css`
            background-color: ${props.bottomColor};
          `
        : css`
            background-color: ${props.bgColor ? COLOR.background[props.bgColor] : 'transparent'};
          `}
  `,

  ScrollContainer: styled.ScrollView`
    flex: 1;
    flex-grow: 1;
  `,

  StaticContainer: styled.View`
    flex: 1;
  `,

  ElasticScrollView: styled.View<IElasticScrollViewProps>`
    background-color: ${props => (props.elasticScrollColor ? props.elasticScrollColor : '#fff')};
    height: ${spacerHeight}px;
    position: absolute;
    left: 0;
    right: 0;

    ${props =>
      props.elasticScrollPosition === 'top'
        ? css`
            top: ${-spacerHeight}px;
          `
        : css`
            bottom: ${-spacerHeight}px;
          `}
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
    z-index: ${Z_INDEX.normal};
  `,
};
