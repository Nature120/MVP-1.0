import styled, { css } from 'styled-components/native';

export const StyledButtonIcon = {
  ButtonIcon: styled.TouchableOpacity<{ size?: number; isWithBg?: boolean }>`
    width: ${props => props.size}px;

    ${props =>
      props.isWithBg &&
      css`
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        width: ${(props.size || 0) + 18}px;
        height: ${(props.size || 0) + 18}px;
        border-radius: 50px;
        background-color: rgba(255, 255, 255, 0.8);
      `}
  `,
};
