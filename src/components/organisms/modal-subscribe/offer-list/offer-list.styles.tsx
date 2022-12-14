import styled, { css } from 'styled-components/native';

export const OfferListStyled = {
  SubscribeWrapper: styled.View`
    flex: 1;
    padding-top: 50px;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: center;
  `,
  SubscribeBox: styled.View<{ marginRight?: number }>`
    width: 160px;
    height: 200px;
    padding: 10px;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}px;
    border-color: green;
    border-width: 1px;
  `,
  SubscribeTitle: styled.Text`
    margin-bottom: 5px;
  `,
  SubscribePrice: styled.Text`
    margin-bottom: 5px;
  `,
  SubscribeText: styled.Text``,
  SubBtn: css`
    margin-top: 20px;
    border-radius: 10px;
  `,
};
