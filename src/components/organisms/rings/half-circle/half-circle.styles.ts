import styled from 'styled-components/native';

export const StyledHalfCircle = {
  HalfCircle: styled.View<{ radius: number }>`
    width: ${props => props.radius * 2}px;
    height: ${props => props.radius}px;
    overflow: hidden;
  `,

  Inner: styled.View<{ radius: number }>`
    width: ${props => props.radius * 2}px;
    height: ${props => props.radius * 2}px;
    border-radius: ${props => props.radius}px;
    overflow: hidden;
  `,
};
