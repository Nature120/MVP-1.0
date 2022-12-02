import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { Image } from '@components/atoms/image';
import { Spacer } from '@components/atoms/spacer';
import { AskModal } from '@components/molecules/ask-modal';
import { ButtonIcon } from '@components/molecules/button-icon';
import { TogglerDoNotDisturb } from '@components/molecules/toggler-do-not-disturb';
import { usePracticeLibraryModal } from './practice-library-modal.state';

import { DEVICE_WIDTH } from '@services/helpers/device-utils';
import { useAppSelector } from '@services/hooks/redux';

import { IPracticeLibraryModalProps } from './practice-library-modal.typings';

import { contentContainerStyle, StyledPracticeLibraryModal as Styled } from './practice-library-modal.styles';

export const PracticeLibraryModal: React.FC<IPracticeLibraryModalProps> = props => {
  const {
    isOpen,
    isWithoutActions,
    isWithoutAskModal,
    closeModal,
    isOpenAsk,
    closeModalAsk,
    saveResponse,
    navigateToTimer,
    openModalAsk,
    onConfirmPress,
    onToggleBookMark,
    toggleBookMark,
  } = usePracticeLibraryModal(props);

  const { commentBeforeImmersion } = useAppSelector(store => store.app);

  const { title, image, description, userGoals } = props.library;

  const insets = useSafeAreaInsets();

  return (
    <Modal transparent={false} visible={isOpen} animationType="slide">
      {!isWithoutAskModal && (
        <AskModal
          isVisible={isOpenAsk}
          onClose={closeModalAsk}
          onButtonPress={saveResponse}
          onTextPress={navigateToTimer}
          onConfirmPress={onConfirmPress}
        />
      )}

      <Styled.PracticeLibraryModal contentContainerStyle={contentContainerStyle} showsVerticalScrollIndicator={false}>
        <View>
          <Image source={{ uri: image }} width={DEVICE_WIDTH} height={275} />

          <Styled.ImageHeader top={insets.top} isWithoutActions={isWithoutActions}>
            <ButtonIcon
              isWithBg
              type="arrowLeft"
              iconIndent={7}
              size={36}
              colorIcon="cloudyGreen"
              onPress={closeModal}
            />
          </Styled.ImageHeader>

          {userGoals[0] && (
            <Styled.TypeContainer>
              <Styled.Type numberOfLines={1}>{userGoals[0]}</Styled.Type>
            </Styled.TypeContainer>
          )}
        </View>
        <Styled.ContentWrapper>
          <Styled.Content>
            <View>
              <Styled.BookmarkBtn onPress={onToggleBookMark}>
                <Icon type={toggleBookMark ? 'checked_leaf' : 'unchecked_leaf'} width={35} height={35} />
              </Styled.BookmarkBtn>
              <Styled.Title numberOfLines={2}>{title}</Styled.Title>
              {/* <Styled.TimeWrapper>
                  <Icon type="clock" colorIcon="cloudyBlue" size={18} />
                  <Styled.Time>
                    {duration.from}-{duration.to} min
                  </Styled.Time>
                </Styled.TimeWrapper> */}

              <Styled.Description isFirst>{description}</Styled.Description>

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

              {!isWithoutActions && <TogglerDoNotDisturb isWithPadding />}
            </View>

            {!isWithoutActions && (
              <Styled.ButtonWrapper>
                <Button
                  buttonText="START TIMER"
                  height={50}
                  onPress={isWithoutAskModal || commentBeforeImmersion ? navigateToTimer : openModalAsk}
                />
              </Styled.ButtonWrapper>
            )}
          </Styled.Content>
        </Styled.ContentWrapper>
      </Styled.PracticeLibraryModal>
      <Styled.SafeAreaView />
    </Modal>
  );
};
