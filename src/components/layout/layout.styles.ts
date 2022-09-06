import styled, { css } from 'styled-components/native';

import { IElasticScrollViewProps, IStyledLayoutProps } from './layout.typings';

import { COLOR } from '@theme/colors';

export const contentContainerStyle = { flexGrow: 1 };

const spacerHeight = 1000;

export const StyledLayout = {
  Layout: styled.SafeAreaView<IStyledLayoutProps>`
    z-index: 1;
    flex: 1;
    background-color: ${props => (props.bgColor ? COLOR.background[props.bgColor] : 'transparent')};
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
    z-index: 0;
  `,
};
