import styled from 'styled-components/native';
import { IStyledLayoutProps } from './layout.typings';

export const StyledLayout = {
  Layout: styled.SafeAreaView<IStyledLayoutProps>`
    z-index: 0;
    flex: 1;
    background-color: ${props => props.bgColor || '#fff'};
    margin-horizontal: ${props => (props.isWithoutMargin ? 0 : '24px')};
  `,

  Ellipse: styled.Image`
    position: absolute;
    width: 100%;
    height: 310px;
    bottom: 0;
    z-index: -1;
  `,
};
