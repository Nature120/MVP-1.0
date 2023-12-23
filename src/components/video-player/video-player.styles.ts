import styled from 'styled-components/native';

export const StyledVideoPlayer = {
  VideoPlayer: styled.View`
    flex: 1;
    background-color: #cef9ef;
    padding-bottom: 20px;
  `,
  Container: styled.View`
    height: 300px;
    justify-content: center;
    background-color: #000;
    align-items: center;
  `,
  ProgressWrapperContainer: styled.View`
    padding: 0 20px;
  `,
  ProgressWrapper: styled.View`
    border-radius: 8px;
    width: 100%;
    height: 10px;
    margin-top: 30px;
    background-color: #dedede;
  `,
  Progress: styled.View<{ width: number }>`
    border-radius: 8px;
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ width }) => width}%;
    height: 10px;
    background-color: #4b9e4d;
  `,
  ControlsWrapper: styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    width: 200px;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  `,
  IconWrapper: styled.View`
    width: 60px;
    height: 60px;
    border-radius: 30px;
  `,
  FullScreenButton: styled.TouchableOpacity`
    padding-right: 10px;
    margin-top: 10px;
    justify-content: flex-end;
    flex-direction: row;
  `,
};
