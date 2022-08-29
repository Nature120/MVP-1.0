import React from 'react';
import { scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import { Icon } from '@components/icon';
import { IProp } from './back-button.types';

import { BackButtonStyles as Styled } from './back-button.styles';

export const BackButton: React.FC<IProp> = ({ width, height, color, cssButton }) => {
  const { goBack, canGoBack } = useNavigation();
  const isGoback = canGoBack();

  const onPressGoBack = () => {
    if (isGoback === true) {
      goBack();
    }
    return;
  };

  return (
    <Styled.BtnWrapper cssButton={cssButton} onPress={onPressGoBack}>
      <Icon type="arrowLeft" width={scale(width)} height={verticalScale(height)} colorIcon={color} />
    </Styled.BtnWrapper>
  );
};
