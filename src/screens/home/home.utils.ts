import Purchases from 'react-native-purchases';
import firestore from '@react-native-firebase/firestore';
import { getWeek } from 'date-fns';

import { IFinishedPractices } from '@services/store/auth/auth.typings';

import { CURRENT_WEEK } from './home.constants';

import { TUserPremiumInfo } from './home.typings';

export const sumUserWeeklyGoal = (array: IFinishedPractices[]) => {
  return array.reduce((result, obj) => {
    result += obj.elapsedTime;
    return result;
  }, 0);
};

export const removeLastWeekPractices = (finishedPractices: IFinishedPractices[]) => {
  const isFinishedPracticesEmpty = finishedPractices?.length === 0;
  if (!finishedPractices || isFinishedPracticesEmpty) {
    return;
  }

  return finishedPractices.reduce((prevPractices, practice): any => {
    const validNumberDate = practice.created_at.seconds * 1000;
    const normalizeDate = new Date(validNumberDate);
    const fireBaseDate = firestore.Timestamp.fromDate(normalizeDate);
    const getPracticeWeek = getWeek(normalizeDate);
    const isValidPractice = CURRENT_WEEK === getPracticeWeek;
    if (isValidPractice) {
      return [...prevPractices, { title: practice.title, created_at: fireBaseDate, elapsedTime: practice.elapsedTime }];
    }
    return [...prevPractices];
  }, []);
};

export const checkUserPremiumInfo = async ({ subscription, storeSubscription }: TUserPremiumInfo) => {
  try {
    const customerInfo = await Purchases.getCustomerInfo();
    const { premium } = customerInfo.entitlements.active;
    const isSubscription = subscription === 'ANNUAL' || subscription === 'MONTHLY';

    if (typeof premium !== 'undefined') {
      if (isSubscription) {
        return;
      }

      storeSubscription(premium.productIdentifier);
      return;
    }

    if (subscription === 'FREE') {
      return;
    }

    storeSubscription('FREE');
  } catch (e) {
    // Error fetching customer info
    console.log('erorr', e);
  }
};
