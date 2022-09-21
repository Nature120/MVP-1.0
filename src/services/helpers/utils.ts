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
