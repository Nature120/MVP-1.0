import { useState } from 'react';

import { TIconNames } from '@components/atoms/icon/icon.typings';

import { IUseAskModalProps } from './ask-modal.typings';

const ICON_GRADE_HASH_MAP = {
  fullMoon: 5,
  waningGibbosMoon: 4,
  halfMoon: 3,
  waxingGibbosMoon: 2,
  newMoon: 1,
};

export const useAskModal = (handlers: IUseAskModalProps) => {
  const { onTextPress, onButtonPress, onConfirmPress } = handlers;
  const [text, setText] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<TIconNames | ''>('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [grade, setGrade] = useState<number | null>(null);

  const handleDone = () => {
    onButtonPress(text, grade);
    setText('');
  };

  const handleTextPress = async () => {
    await onTextPress(text, grade);
    setText('');
  };

  const onPressIcon = (type: TIconNames) => () => {
    setSelectedIcon(type);
  };

  const resetState = () => {
    setIsConfirmed(false);
    setSelectedIcon('');
    setText('');
  };

  const toggleConfirm = () => {
    const iconGrade = ICON_GRADE_HASH_MAP[selectedIcon as keyof typeof ICON_GRADE_HASH_MAP];
    setGrade(iconGrade);
    onConfirmPress && onConfirmPress(iconGrade);
    setIsConfirmed(!isConfirmed);
  };

  return {
    selectedIcon,
    isConfirmed,
    onPressIcon,
    resetState,
    toggleConfirm,
    text,
    setText,
    handleDone,
    handleTextPress,
  };
};
