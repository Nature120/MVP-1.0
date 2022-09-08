import React, { useState } from 'react';
import { Modal, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/button';
import { ButtonIcon } from '@components/button-icon';
import { Icon } from '@components/icon';
import { TogglerDoNotDisturb } from '@components/toggler-do-not-disturb';

import { APP_ROUTES } from '@constants/routes';

import { IPracticeLibraryModalProps } from './practice-library-modal.typings';

import { contentContainerStyle, StyledPracticeLibraryModal as Styled } from './practice-library-modal.styles';

import { Spacer } from '@theme/components';

export const PracticeLibraryModal: React.FC<IPracticeLibraryModalProps> = props => {
  const { navigate } = useNavigation();

  const {
    isWithoutActions,
    isOpen,
    closeModal,
    library: { title, image, description, type, minuteInterval, tags },
  } = props;

  const [isDoNotDisturb, setIsDoNotDisturb] = useState(false);

  const getParagraphes = (text: string) => {
    return text.match(/[^.!?]+[.!?]+/g)?.map((sentence, index) => (
      <Styled.Description isFirst={index === 0} key={sentence}>
        {sentence.trim()}
      </Styled.Description>
    ));
  };

  const navigateToTimer = () => {
    closeModal();
    navigate(APP_ROUTES.immersionTimer as never);
  };

  return (
    <Modal visible={isOpen} animationType="slide">
      <Styled.PracticeLibraryModal contentContainerStyle={contentContainerStyle}>
        <View>
          <Styled.ImageTop source={{ uri: image }} />

          <Styled.CloseWrapper>
            <SafeAreaView>
              <ButtonIcon isWithBg type="cross" size={18} colorIcon="cloudyGreen" onPress={closeModal} />
            </SafeAreaView>
          </Styled.CloseWrapper>

          <Styled.TypeContainer>
            <Styled.Type numberOfLines={1}>{type}</Styled.Type>
          </Styled.TypeContainer>
        </View>
        <Styled.ContentWrapper>
          <Styled.Content>
            <View>
              <Styled.Header>
                <Styled.Title numberOfLines={1}>{title}</Styled.Title>
                <Styled.TimeWrapper>
                  <Icon type="clock" colorIcon="cloudyBlue" size={18} />
                  <Styled.Time>
                    {minuteInterval.from}-{minuteInterval.to} min
                  </Styled.Time>
                </Styled.TimeWrapper>
              </Styled.Header>

              {getParagraphes(description)}

              <Styled.Tags>
                {tags.map((tag, index, arr) => (
                  <Spacer isHorizontal key={tag} gap={8} isLastItem={index === arr.length - 1}>
                    <Spacer gap={8}>
                      <Styled.Tag>
                        <Styled.TagText>{tag}</Styled.TagText>
                      </Styled.Tag>
                    </Spacer>
                  </Spacer>
                ))}
              </Styled.Tags>

              {!isWithoutActions && (
                <TogglerDoNotDisturb isDoNotDisturb={isDoNotDisturb} setIsDoNotDisturb={setIsDoNotDisturb} />
              )}
            </View>

            {!isWithoutActions && (
              <Styled.ButtonWrapper>
                <Button buttonText="START TIMER" height={50} onPress={navigateToTimer} />
              </Styled.ButtonWrapper>
            )}
          </Styled.Content>
        </Styled.ContentWrapper>
      </Styled.PracticeLibraryModal>
      <Styled.SafeAreaView />
    </Modal>
  );
};
