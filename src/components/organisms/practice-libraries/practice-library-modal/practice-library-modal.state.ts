import { useNavigation } from '@react-navigation/native';

import { useOpenCloseModal } from '@services/hooks/open-close';
import { useAppDispatch } from '@services/hooks/redux';
import { useSetDefaultTimer } from '@services/hooks/setDefaultTimer';
import { setCommentBeforeImmersion } from '@services/store/app';
import * as action from '@services/store/auth/auth.actions';

import { APP_ROUTES } from '@constants/routes';

import { IPracticeLibraryModalProps } from './practice-library-modal.typings';

export const usePracticeLibraryModal = (props: IPracticeLibraryModalProps) => {
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  const { isOpen: isOpenAsk, onClose: closeModalAsk, onOpen: openModalAsk } = useOpenCloseModal();
  const { defaultTimer } = useSetDefaultTimer('startTimer');
  const { isWithoutActions, isWithoutAskModal, isOpen, closeModal, library } = props;

  const saveResponse = (value: string) => {
    const response = value.trim();
    dispatch(setCommentBeforeImmersion(response));
    navigateToTimer();
  };

  const navigateToTimer = () => {
    closeModalAsk();
    closeModal();

    defaultTimer();
    dispatch(action.addLatestLibrary(library));
    navigate(APP_ROUTES.immersionTimer as never);
  };

  const navigateToHomePage = () => {
    closeModal();
    navigate(APP_ROUTES.main.home as never);
  };

  return {
    isOpen,
    isWithoutActions,
    isWithoutAskModal,
    navigateToHomePage,
    closeModal,
    isOpenAsk,
    closeModalAsk,
    saveResponse,
    navigateToTimer,
    openModalAsk,
  };
};
