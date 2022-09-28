import React from 'react';
import { scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import { Icon } from '@components/atoms/icon';

import { IBackButtonProps } from './back-button.typings';

import { BackButtonStyles as Styled } from './back-button.styles';

export const BackButton: React.FC<IBackButtonProps> = props => {
  const { width, height, color, cssButton, iconType, onPress } = props;
  const { goBack, canGoBack } = useNavigation();
  const isGoback = canGoBack();

  const onPressGoBack = () => {
    if (onPress) {
      return onPress();
    }
    if (isGoback === true) {
      goBack();
    }
    return;
  };

  return (
    <Styled.BtnWrapper cssButton={cssButton} onPress={onPressGoBack}>
      <Icon type={iconType || 'arrowLeft'} width={scale(width)} height={verticalScale(height)} colorIcon={color} />
    </Styled.BtnWrapper>
  );
};
