import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { databaseRef } from '@services/api.service';
import { useGoal } from '@services/hooks/goal';
import { useAppDispatch } from '@services/hooks/redux';
import { setCommentBeforeImmersion } from '@services/store/app';
import { isNotFirstLaunch } from '@services/store/auth/auth.actions';
import { getFirstLaunch, getUserInfo } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

import { IPracticeLibrary } from '@typings/common';

export const useHome = () => {
  const { navigate } = useNavigation();
  const user = useSelector(getUserInfo);
  const { weeklyGoal } = useGoal();
  const [isOpen, setIsOpen] = useState(false);
  const [practiceLibraries, setPracticeLibraries] = useState<IPracticeLibrary[]>([]);
  const dispatch = useAppDispatch();
  const isFirstLaunch = useSelector(getFirstLaunch);

  const onToggleOpen = () => setIsOpen(prev => !prev);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const getLibraries = async () => {
      const uIds = user.whatBrings;

      if (!uIds) {
        return;
      }

      const getLibrariesPromise = uIds.map(async (title: string) => {
        const result = await databaseRef('Practise library').doc(title).get();
        return result.data()!.data;
      });

      const pickedLibraries: IPracticeLibrary[] = await Promise.all(getLibrariesPromise);

      setPracticeLibraries(pickedLibraries.flat());
    };

    getLibraries();
  }, [user.whatBrings]);

  const saveResponse = async (value: string) => {
    const response = value.trim();
    dispatch(setCommentBeforeImmersion(response));
    navigateToImmersions();
  };

  useEffect(() => {
    if (isFirstLaunch === false) {
      return;
    }
    dispatch(isNotFirstLaunch(null));
  }, []);

  const navigateToImmersions = () => {
    closeModal();
    setTimeout(() => {
      navigate(APP_ROUTES.immersions as never);
    }, 500);
  };

  return {
    user,
    weeklyGoal,
    isOpen,
    practiceLibraries,
    closeModal,
    onToggleOpen,
    saveResponse,
    navigateToImmersions,
  };
};
