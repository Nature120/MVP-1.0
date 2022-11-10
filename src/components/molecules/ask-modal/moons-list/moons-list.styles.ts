import styled from 'styled-components/native';

export const StyledMoonsList = {
  MoonsList: styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;
  `,

  IconWrapper: styled.View<{ isActive: boolean }>`
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  `,
};
