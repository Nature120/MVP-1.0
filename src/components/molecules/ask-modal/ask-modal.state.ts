import { useState } from 'react';

import { IUseAskModalProps } from './ask-modal.typings';

export const useAskModal = (props: IUseAskModalProps) => {
  const { onTextPress, onButtonPress } = props;

  const [text, setText] = useState('');

  const handleDone = () => {
    onButtonPress(text);
    setText('');
  };

  const handleTextPress = async () => {
    await onTextPress();
    setText('');
  };

  return {
    text,
    setText,
    handleDone,
    handleTextPress,
  };
};
