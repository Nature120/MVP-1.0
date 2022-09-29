import React from 'react';
import { Modal, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { Spacer } from '@components/atoms/spacer';
import { ButtonIcon } from '@components/molecules/button-icon';
import { TogglerDoNotDisturb } from '@components/molecules/toggler-do-not-disturb';
import { usePracticeLibraryModal } from './practice-library-modal.state';

import { IPracticeLibraryModalProps } from './practice-library-modal.typings';

import { contentContainerStyle, StyledPracticeLibraryModal as Styled } from './practice-library-modal.styles';

export const PracticeLibraryModal: React.FC<IPracticeLibraryModalProps> = props => {
  const {
    isOpen,
    isWithoutActions,
    navigateToHomePage,
    closeModal,
    isDoNotDisturb,
    setIsDoNotDisturb,
    navigateToTimer,
  } = usePracticeLibraryModal(props);

  const { title, image, description, duration, userGoals } = props.library;

  const insets = useSafeAreaInsets();

  const getParagraphes = (text: string) => {
    const splitted = text.match(/[^.!?]+[.!?]+/g);

    if (!splitted) {
      return <Styled.Description isFirst>{text.trim()}</Styled.Description>;
    }

    return splitted.map((sentence, index) => (
      <Styled.Description isFirst={index === 0} key={sentence + index}>
        {sentence.trim()}
      </Styled.Description>
    ));
  };

  return (
    <Modal visible={isOpen} animationType="slide">
      <Styled.PracticeLibraryModal contentContainerStyle={contentContainerStyle} showsVerticalScrollIndicator={false}>
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
            <Styled.Type numberOfLines={1}>{userGoals[0]}</Styled.Type>
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
                {userGoals.map((userGoal, index, arr) => (
                  <Spacer isHorizontal key={userGoal + index} gap={8} isLastItem={index === arr.length - 1}>
                    <Spacer gap={8}>
                      <Styled.Tag>
                        <Styled.TagText>{userGoal}</Styled.TagText>
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
