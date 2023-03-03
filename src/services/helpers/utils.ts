import { Alert, Linking } from 'react-native';
import { endOfWeek, format, startOfWeek } from 'date-fns';
import isEqual from 'lodash/isEqual';

import { TIME_HASH_MAP } from '@components/organisms/time-picker/time-picker.constants';
import { TPeriod } from '@components/organisms/time-picker/time-picker.typings';

export const getMinMaxDate = (period: TPeriod) => {
  const d = new Date().getDate();
  const m = new Date().getMonth();
  const y = new Date().getFullYear();
  const { max, min } = TIME_HASH_MAP[period];

  return {
    minimumDate: new Date(new Date(y, m, d, min)),
    maximumDate: new Date(new Date(y, m, d, max)),
  };
};

export const getFormattedDateRange = (weekDate: Date, dateFormat = 'MMM d') => {
  const start = format(startOfWeek(weekDate), dateFormat);
  const end = format(endOfWeek(weekDate), dateFormat);

  return `${start} - ${end}`;
};

export const areSameObjectArrays = <T, S>(array1: T[], array2: S[]) => {
  if (array1.length !== array2.length) {
    return false;
  }
  return isEqual(array1, array2);
};

export const onPressLink = async (link: string) => {
  let url: string;

  if (!link.startsWith('http://') && !link.startsWith('https://')) {
    url = 'https://' + link;
  } else {
    url = link;
  }

  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL ${url}`);
  }
};
