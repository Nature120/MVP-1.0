import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch } from '@services/hooks/redux';
import { setCommentBeforeImmersion } from '@services/store/app';

import { APP_ROUTES } from '@constants/routes';

import { IPracticeLibraryModalProps } from './practice-library-modal.typings';

export const usePracticeLibraryModal = (props: IPracticeLibraryModalProps) => {
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  const [isOpenAsk, setIsOpenAsk] = useState(false);
  const closeModalAsk = () => setIsOpenAsk(false);
  const openModalAsk = () => setIsOpenAsk(true);

  const { isWithoutActions, isOpen, closeModal, library } = props;

  const saveResponse = (value: string) => {
    const response = value.trim();
    dispatch(setCommentBeforeImmersion(response));
    navigateToTimer();
  };

  const navigateToTimer = () => {
    closeModalAsk();
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
    isOpenAsk,
    closeModalAsk,
    saveResponse,
    navigateToTimer,
    openModalAsk,
  };
};
