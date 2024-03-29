import { useNavigation } from '@react-navigation/native';

import { useOpenCloseModal } from '@services/hooks/open-close';
import { useAppDispatch } from '@services/hooks/redux';
import { useSetDefaultTimer } from '@services/hooks/setDefaultTimer';
import { setCommentBeforeImmersion, setGradeBeforeImmersion } from '@services/store/app';
import * as action from '@services/store/auth/auth.actions';

import { APP_ROUTES } from '@constants/routes';

import { IPracticeLibraryModalProps } from './practice-library-modal.typings';

export const usePracticeLibraryModal = (props: IPracticeLibraryModalProps) => {
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  const { isOpen: isOpenAsk, onClose: closeModalAsk, onOpen: openModalAsk } = useOpenCloseModal();
  const { defaultTimer } = useSetDefaultTimer('startTimer');

  const { isWithoutActions, isWithoutAskModal, isOpen, closeModal, library } = props;
  const { audioFile } = library;

  const isAudioFile = audioFile !== undefined;

  const saveResponse = (value: string) => {
    const response = value.trim();
    dispatch(setCommentBeforeImmersion(response));
    navigateToTimer();
  };

  const onConfirmPress = (grade: number) => {
    dispatch(setGradeBeforeImmersion(grade));
  };

  const navigateToTimer = () => {
    closeModalAsk();
    closeModal();

    defaultTimer();
    dispatch(action.addLatestLibrary(library));
    navigate(APP_ROUTES.immersionTimer as never);
  };

  return {
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
    isAudioFile,
  };
};
