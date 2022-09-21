import { useEffect } from 'react';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';

import { updateUser } from '@services/api.service';
import { useAppDispatch } from '@services/hooks/redux';
import { useSignOut } from '@services/hooks/sign-out';
import { IUser } from '@services/store/auth/auth.interface';
import { getUid } from '@services/store/auth/auth.selectors';

import { IMAGES_TO_PRELOAD } from '@constants/images';
import { ONBOARDING_GOAL_HASH_MAP, whatBringsVariants } from '@screens/onboarding/onboarding.constants';

import { TDailyGoal } from '@typings/common';

export const useStart = () => {
  const { onSignOut } = useSignOut();
  const uid = useSelector(getUid);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const setDefaultUserProperties = async () => {
      const defaultProperties: Partial<IUser> = {
        dailyGoal: +Object.keys(ONBOARDING_GOAL_HASH_MAP)[0] as TDailyGoal,
        goal: 0,
        comments: [],
        whatBrings: [whatBringsVariants[0].text.toLowerCase().replace(/ /g, '_')],
      };
      await updateUser(uid, defaultProperties, dispatch);
    };

    uid && setDefaultUserProperties();
  }, [uid]);

  useEffect(() => {
    FastImage.preload(IMAGES_TO_PRELOAD);
  }, []);

  return {
    onSignOut,
  };
};
