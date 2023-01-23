import styled from 'styled-components/native';

export const ImmersionTimerStyled = {
  Wrapper: styled.View<{ isAudioFile: boolean }>`
    flex-grow: 1;
    margin-horizontal: 24px;
    margin-bottom: ${({ isAudioFile }) => (isAudioFile ? '35' : '0')}px;
    justify-content: space-between;
  `,
};
