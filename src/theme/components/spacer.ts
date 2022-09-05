import styled, { css } from 'styled-components/native';

interface ISapcerProps {
  gap?: number;
  isLastItem?: boolean;
  isHorizontal?: boolean;
}

export const Sapcer = styled.View<ISapcerProps>`
  ${props =>
    props.isHorizontal
      ? css`
          margin-right: ${props.isLastItem ? 0 : props.gap || 0}px;
        `
      : css`
          margin-bottom: ${props.isLastItem ? 0 : props.gap || 0}px;
        `}
`;
