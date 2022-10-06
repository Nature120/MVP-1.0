import React from 'react';

import { ButtonIcon } from '@components/molecules/button-icon';
import { ButtonWithLink } from '@components/molecules/button-with-link';
import { ModalBottom } from '@components/molecules/modal-bottom';
import { useAskModal } from './ask-modal.state';

import { IAskModalProps } from './ask-modal.typings';

import { StyledAskModal as Styled } from './ask-modal.styles';

export const AskModal: React.FC<IAskModalProps> = props => {
  const { isVisible, onClose, modalText, onModalHide, onTextPress, onButtonPress } = props;
  const { isKeyboardVisible, text, setText, handleDone, handleTextPress } = useAskModal({ onTextPress, onButtonPress });

  return (
    <ModalBottom isVisible={isVisible} onClose={onClose} isWithLogo onModalHide={onModalHide}>
      <ButtonIcon type="arrowLeft" colorIcon="cloudyGreen" size={24} onPress={onClose} />
      <Styled.ModalText marginVertical={isKeyboardVisible ? 20 : 43}>
        {modalText || 'How do you feel?'}
      </Styled.ModalText>
      <Styled.TextInput
        value={text}
        onChangeText={setText}
        showSoftInputOnFocus={false}
        autoCorrect={false}
        autoCapitalize="sentences"
        multiline
        placeholder="Add a note..."
        marginBottom={isKeyboardVisible ? 20 : 46}
      />

      <ButtonWithLink
        buttonText="DONE"
        height={50}
        routeText="Skip"
        onPress={handleDone}
        onTextPress={handleTextPress}
        marginBottom={isKeyboardVisible ? -15 : 24}
      />
    </ModalBottom>
  );
};
