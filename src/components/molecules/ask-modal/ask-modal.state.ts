import { useState } from 'react';
import TrackPlayer from 'react-native-track-player';

import { TIconNames } from '@components/atoms/icon/icon.typings';

import { usePlayer } from '@screens/immersion-timer/immersion-timer.constants';

import { TProp } from './ask-modal.typings';

const ICON_GRADE_HASH_MAP = {
  fullMoon: 5,
  waningGibbosMoon: 4,
  halfMoon: 3,
  waxingGibbosMoon: 2,
  newMoon: 1,
};

export const useAskModal = ({ handlers, titleText, isWithTrack }: TProp) => {
  const { onTextPress, onButtonPress, onConfirmPress } = handlers;
  const [text, setText] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<TIconNames | ''>('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [grade, setGrade] = useState<number | null>(null);

  const { isAudioFile } = usePlayer();

  const isImmersionTimerAskModalWithAudio = (titleText === 'now' && isAudioFile) || isWithTrack;

  const handleDone = () => {
    onButtonPress(text, grade);
    setText('');
  };

  const handleTextPress = async () => {
    await onTextPress(text, grade);
    setText('');

    ///Reset current track in immersion timer
    if (isImmersionTimerAskModalWithAudio) {
      await TrackPlayer.reset();
    }
  };

  const onPressIcon = (type: TIconNames) => () => {
    setSelectedIcon(type);
  };

  const resetState = () => {
    setIsConfirmed(false);
    setSelectedIcon('');
    setText('');
  };

  const toggleConfirm = async () => {
    const iconGrade = ICON_GRADE_HASH_MAP[selectedIcon as keyof typeof ICON_GRADE_HASH_MAP];
    setGrade(iconGrade);
    onConfirmPress && onConfirmPress(iconGrade);
    setIsConfirmed(!isConfirmed);

    ///Reset current track in immersion timer
    if (isImmersionTimerAskModalWithAudio) {
      await TrackPlayer.reset();
    }
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
