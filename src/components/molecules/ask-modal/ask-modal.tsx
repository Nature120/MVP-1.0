import React from 'react';

import { Icon } from '@components/atoms/icon';
import { TIconNames } from '@components/atoms/icon/icon.typings';
import { ButtonIcon } from '@components/molecules/button-icon';
import { ButtonWithLink } from '@components/molecules/button-with-link';
import { ModalBottom } from '@components/molecules/modal-bottom';
import { useAskModal } from './ask-modal.state';
import { MoonsList } from './moons-list';

import { IAskModalProps } from './ask-modal.typings';

import { StyledAskModal as Styled } from './ask-modal.styles';

const MOON_SIZE = 44;

export const AskModal: React.FC<IAskModalProps> = props => {
  const { isVisible, onClose, modalText, titleText, isWithTrack, ...handlers } = props;
  const {
    selectedIcon,
    isConfirmed,
    onPressIcon,
    resetState,
    toggleConfirm,
    text,
    setText,
    handleDone,
    handleTextPress,
  } = useAskModal({ handlers, titleText, isWithTrack });

  const isBeforePracticeAskModal = titleText === 'today';

  const button = (buttonText: string, onPress: () => void, isDisabled?: boolean) => (
    <ButtonWithLink
      buttonText={buttonText}
      height={50}
      routeText="Skip"
      onPress={onPress}
      onTextPress={handleTextPress}
      marginBottom={24}
      isDisabled={isDisabled}
    />
  );

  if (isConfirmed) {
    return (
      <ModalBottom isVisible={isVisible} onClose={onClose} onModalHide={resetState}>
        <Styled.SelectedIcon logoSize={MOON_SIZE}>
          <Icon type={selectedIcon as TIconNames} size={MOON_SIZE} />
        </Styled.SelectedIcon>

        <ButtonIcon type="arrowLeft" colorIcon="cloudyGreen" size={24} onPress={toggleConfirm} />

        <Styled.ModalText marginTop={43}>{modalText || 'Why do you feel this way?'}</Styled.ModalText>

        <Styled.TextInput
          value={text}
          onChangeText={setText}
          autoCapitalize="sentences"
          multiline
          placeholder="Add a note..."
          marginBottom={46}
        />

        {button('DONE', handleDone)}
      </ModalBottom>
    );
  }

  return (
    <ModalBottom isVisible={isVisible} onClose={onClose} onModalHide={resetState}>
      <Styled.ModalText marginTop={12} marginBottom={46}>
        How are you feeling {titleText}?
      </Styled.ModalText>

      <MoonsList iconsSize={MOON_SIZE} onPressIcon={onPressIcon} selectedIcon={selectedIcon} />

      <Styled.Description>
        {isBeforePracticeAskModal
          ? 'Before doing a nature immersion, we suggest mood tracking so you can see how spending time in nature affects how you feel.'
          : 'After finishing a nature immersion, we suggest mood tracking again so you can see how spending time in nature affects how you feel.'}
      </Styled.Description>

      {button('CONFIRM', toggleConfirm, !selectedIcon)}
    </ModalBottom>
  );
};
