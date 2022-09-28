import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { APP_ROUTES } from '@constants/routes';

import { IPracticeLibraryModalProps } from './practice-library-modal.typings';

export const usePracticeLibraryModal = (props: IPracticeLibraryModalProps) => {
  const { navigate } = useNavigation();

  const { isWithoutActions, isOpen, closeModal, library } = props;

  const [isDoNotDisturb, setIsDoNotDisturb] = useState(false);

  const navigateToTimer = () => {
    closeModal();
    navigate(APP_ROUTES.immersionTimer as never, library as never);
  };

  const navigateToHomePage = () => {
    closeModal();
    navigate(APP_ROUTES.main.home as never);
  };

  return {
    isOpen,
    isWithoutActions,
    navigateToHomePage,
    closeModal,
    isDoNotDisturb,
    setIsDoNotDisturb,
    navigateToTimer,
  };
};
