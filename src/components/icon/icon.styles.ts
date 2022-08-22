import styled from "styled-components/native";

export const IconStyles = {
  Wrapper: styled.View<{
    styles?: any;
  }>`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ styles }) => styles};
  `,
};
