import React from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { isIOS } from '@services/helpers/device-utils';

import { IModalWindowProps } from './modal-window.typings';

export const ModalWindow: React.FC<IModalWindowProps> = props => {
  const {
    isVisible,
    animationIn,
    animationOut,
    swipeDirection,
    positionVertical,
    avoidKeyboard = true,
    positionHorizontal,
    backdropOpacity = 0.2,
    animationInTiming = 400,
    animationOutTiming = 400,
    isBackdropPress = true,
    modalStyle,
    children,
    onClose,
    onModalWillShow,
  } = props;

  const onBackdropPress = () => isBackdropPress && onClose?.();

  return (
    <Modal
      swipeThreshold={200}
      isVisible={isVisible}
      avoidKeyboard={avoidKeyboard}
      swipeDirection={swipeDirection}
      backdropOpacity={backdropOpacity}
      backdropTransitionInTiming={500}
      // customBackdrop
      animationIn={animationIn || 'slideInUp'}
      animationOut={animationOut || 'slideOutDown'}
      animationInTiming={animationInTiming}
      animationOutTiming={animationOutTiming}
      onSwipeComplete={onClose}
      onBackdropPress={onBackdropPress}
      onModalWillShow={onModalWillShow}
      useNativeDriver={!isIOS}
      useNativeDriverForBackdrop={!isIOS}
      style={[
        styles.modal,
        {
          justifyContent: positionVertical,
          alignItems: positionHorizontal || 'stretch',
        },
        modalStyle,
      ]}>
      {children}
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
  },
});
