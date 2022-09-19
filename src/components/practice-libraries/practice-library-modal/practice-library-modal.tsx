import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
  const insets = useSafeAreaInsets();

  const { isWithoutActions, isOpen, closeModal, library } = props;
  const { title, image, description, type, duration, tags } = library;

  const [isDoNotDisturb, setIsDoNotDisturb] = useState(false);

  const getParagraphes = (text: string) => {
    return text.match(/[^.!?]+[.!?]+/g)?.map((sentence, index) => (
      <Styled.Description isFirst={index === 0} key={sentence + index}>
        {sentence.trim()}
      </Styled.Description>
    ));
  };

  const navigateToTimer = () => {
    closeModal();
    navigate(APP_ROUTES.immersionTimer as never, library as never);
  };

  const navigateToHomePage = () => {
    closeModal();
    navigate(APP_ROUTES.main.home as never);
  };

  return (
    <Modal visible={isOpen} animationType="slide">
      <Styled.PracticeLibraryModal contentContainerStyle={contentContainerStyle}>
        <View>
          <Styled.ImageTop source={{ uri: image }} />

          <Styled.ImageHeader top={insets.top} isWithoutActions={isWithoutActions}>
            {!isWithoutActions && (
              <ButtonIcon
                isWithBg
                type="arrowLeft"
                iconIndent={7}
                size={36}
                colorIcon="cloudyGreen"
                onPress={navigateToHomePage}
              />
            )}
            <ButtonIcon isWithBg type="cross" iconIndent={9} size={36} colorIcon="cloudyGreen" onPress={closeModal} />
          </Styled.ImageHeader>

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
                    {duration.from}-{duration.to} min
                  </Styled.Time>
                </Styled.TimeWrapper>
              </Styled.Header>

              {getParagraphes(description)}

              <Styled.Tags>
                {tags.map((tag, index, arr) => (
                  <Spacer isHorizontal key={tag + index} gap={8} isLastItem={index === arr.length - 1}>
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
