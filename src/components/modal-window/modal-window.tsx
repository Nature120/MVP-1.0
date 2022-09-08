import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Modal from 'react-native-modal';
import { BlurView } from '@react-native-community/blur';

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
    animationInTiming = 400,
    animationOutTiming = 400,
    isBackdropBlocked,
    modalStyle,
    onModalHide,
    children,
    onClose,
    onModalWillShow,
  } = props;

  const onBackdropPress = () => !isBackdropBlocked && onClose?.();

  return (
    <Modal
      onModalHide={onModalHide}
      swipeThreshold={200}
      isVisible={isVisible}
      avoidKeyboard={avoidKeyboard}
      swipeDirection={swipeDirection}
      backdropOpacity={1}
      backdropTransitionInTiming={500}
      customBackdrop={
        <TouchableWithoutFeedback onPress={onBackdropPress}>
          {isIOS ? (
            <View style={[styles.flex, styles.bg]}>
              <BlurView style={styles.flex} blurType={'light'} blurAmount={2} />
            </View>
          ) : (
            <BlurView style={styles.flex} blurType={'dark'} blurAmount={1} overlayColor={'rgba(0, 0, 0, 0.2)'} />
          )}
        </TouchableWithoutFeedback>
      }
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
  bg: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  flex: {
    flex: 1,
  },
  modal: {
    flex: 1,
    margin: 0,
  },
});
