import React, { useState } from 'react';

import { ButtonIcon } from '@components/button-icon';
import { ButtonWithLink } from '@components/button-with-link';
import { ModalBottom } from '@components/modal-bottom';

import { IAskModalProps } from './ask-modal.typings';

import { StyledAskModal as Styled } from './ask-modal.styles';

export const AskModal: React.FC<IAskModalProps> = props => {
  const { isVisible, onClose, modalText, onTextPress, onButtonPress, onModalHide } = props;

  const [text, setText] = useState('');

  const handleDone = () => {
    onButtonPress(text);
    setText('');
  };

  const handleTextPress = () => {
    onTextPress();
    setText('');
  };

  return (
    <ModalBottom isVisible={isVisible} onClose={onClose} isWithLogo onModalHide={onModalHide}>
      <ButtonIcon type="arrowLeft" colorIcon="cloudyGreen" size={24} onPress={onClose} />
      <Styled.ModalText>{modalText || 'How do you feel?'}</Styled.ModalText>
      <Styled.TextInput
        value={text}
        onChangeText={setText}
        showSoftInputOnFocus={false}
        autoCorrect={false}
        autoCapitalize="sentences"
        multiline
        placeholder="Add a note..."
      />

      <ButtonWithLink
        buttonText="DONE"
        height={50}
        routeText="Skip"
        onPress={handleDone}
        onTextPress={handleTextPress}
      />
    </ModalBottom>
  );
};
