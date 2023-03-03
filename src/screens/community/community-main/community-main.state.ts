import { useNavigation } from '@react-navigation/native';

import { useAppSelector } from '@services/hooks/redux';

import { APP_ROUTES } from '@constants/routes';

import { TTeacherProfileNavigationProp } from '@typings/common';

export const useStateCommunityMain = () => {
  const teachers = useAppSelector(state => state.teachers.teachers);

  const { navigate } = useNavigation<TTeacherProfileNavigationProp>();

  const onPressTeacherCard = (teacherName: string) => {
    navigate(APP_ROUTES.teacherProfile, { teacherName });
  };

  return { teachers, onPressTeacherCard };
};
