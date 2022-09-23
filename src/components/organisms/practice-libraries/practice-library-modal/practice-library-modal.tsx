import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { ButtonIcon } from '@components/molecules/button-icon';
import { TogglerDoNotDisturb } from '@components/molecules/toggler-do-not-disturb';

import { APP_ROUTES } from '@constants/routes';

import { IPracticeLibraryModalProps } from './practice-library-modal.typings';

import { contentContainerStyle, StyledPracticeLibraryModal as Styled } from './practice-library-modal.styles';

import { Spacer } from '@theme/components';

export const PracticeLibraryModal: React.FC<IPracticeLibraryModalProps> = props => {
  const { navigate } = useNavigation();
  const insets = useSafeAreaInsets();

  const { isWithoutActions, isOpen, closeModal, library } = props;
  const { title, image, description, duration, userGoals } = library;

  const [isDoNotDisturb, setIsDoNotDisturb] = useState(false);

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
