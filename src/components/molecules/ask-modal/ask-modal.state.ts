import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

import { IUseAskModalProps } from './ask-modal.typings';

export const useAskModal = (props: IUseAskModalProps) => {
  const { onTextPress, onButtonPress } = props;
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const [text, setText] = useState('');

  const handleDone = () => {
    onButtonPress(text);
    setText('');
  };

  const handleTextPress = async () => {
    await onTextPress();
    setText('');
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return {
    isKeyboardVisible,
    text,
    setText,
    handleDone,
    handleTextPress,
  };
};
