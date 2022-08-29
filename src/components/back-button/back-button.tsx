import React from 'react';
import { scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import { Icon } from '@components/icon';

import { BackButtonStyles as Styled } from './back-button.styles';

export const BackButton = () => {
  const { goBack, canGoBack } = useNavigation();
  const isGoback = canGoBack();

  const onPressGoBack = () => {
    if (isGoback === true) {
      goBack();
    }
    return;
  };

  return (
    <Styled.Container>
      <Styled.BtnWrapper onPress={onPressGoBack}>
        <Icon
          type="arrowLeft"
          width={scale(32)}
          height={verticalScale(32)}
          colorIcon={'darkBlue'}
        />
      </Styled.BtnWrapper>
    </Styled.Container>
  );
};
