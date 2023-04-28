import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { useGoal } from '@services/hooks/goal';
import { useOpenCloseModal } from '@services/hooks/open-close';
import { useParam } from '@services/hooks/param';
import { getLoading } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

import { IAddedTime } from '@typings/common';

export const useImmersionChange = () => {
  const { params } = useParam<IAddedTime>();
  const { navigate } = useNavigation();
  const isLoading = useSelector(getLoading);
  const { weeklyGoal } = useGoal();
  const { isOpen, onOpen, onClose } = useOpenCloseModal();

  const [immersion, setImmersion] = useState(params.addedTime);

  const onDone = async () => {
    navigate(APP_ROUTES.immersionComplete as never, { addedTime: immersion } as never);
  };

  const onDelete = () => {
    navigate(APP_ROUTES.main.home as never);
  };

  return {
    isLoading,
    weeklyGoal,
    immersion,
    onDone,
    onDelete,
    setImmersion,
    isOpen,
    onClose,
    onOpen,
  };
};
