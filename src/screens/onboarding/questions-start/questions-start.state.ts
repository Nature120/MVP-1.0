import { useEffect, useState } from 'react';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { ITextCheckBox } from '@components/molecules/text-checkbox/text-checkbox.typings';

import { databaseRef } from '@services/api.service';
import { updateUser } from '@services/api.service';
import { useAppDispatch } from '@services/hooks/redux';
import { setIsFirstLaunchApp } from '@services/store/app';
import { getUid, getUserInfo } from '@services/store/auth/auth.selectors';
import { IUser } from '@services/store/auth/auth.typings';

import { IMAGES_TO_PRELOAD } from '@constants/images';
import { APP_ROUTES } from '@constants/routes';
import { ONBOARDING_GOAL_HASH_MAP } from '@screens/onboarding/onboarding.constants';

import { TDailyGoal } from '@typings/common';

const WHAT_BRINGS_DEFAULT = 'Mental Well-being';

export const useQuestionsStart = () => {
  const [whatBringsVariants, setWhatBringsVariants] = useState<ITextCheckBox[]>([]);
  const dispatch = useAppDispatch();
  const uid = useSelector(getUid);

  useEffect(() => {
    const setDefaultUserProperties = async () => {
      const defaultProperties: Partial<IUser> = {
        dailyGoal: +Object.keys(ONBOARDING_GOAL_HASH_MAP)[0] as TDailyGoal,
        goal: 0,
        whatBrings: [WHAT_BRINGS_DEFAULT],
      };
      await updateUser(uid, defaultProperties, dispatch);
    };

    uid &&
      setTimeout(() => {
        setDefaultUserProperties();
      }, 1000);
  }, [uid]);

  const getVariants = async () => {
    const res = await databaseRef('Other text').doc('Top Categories').get();
    const uIds: ITextCheckBox[] = res
      .data()!
      .topCategories.map((category: string) => ({ text: category.toUpperCase(), value: category }));

    setWhatBringsVariants(uIds);
  };

  useEffect(() => {
    getVariants();
  }, []);

  return { whatBringsVariants };
};
