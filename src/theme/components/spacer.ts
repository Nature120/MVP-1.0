import styled from 'styled-components/native';

export const Sapcer = styled.View<{ gap?: number; isLastItem?: boolean }>`
  margin-bottom: ${props => (props.isLastItem ? 0 : props.gap || 0)}px;
`;
