import { useDispatch } from 'react-redux';

import * as action from '@services/store/timer/timer.actions';

type ButtonName = 'startTimer' | 'done';

export const useSetDefaultTimer = (buttonName: ButtonName) => {
  const dispatch = useDispatch();

  const defaultTimer = () => {
    if (buttonName === 'startTimer') {
      defaultStartDateAndSec();
      dispatch(action.isActive(true));
      return;
    } else if (buttonName === 'done') {
      defaultStartDateAndSec();
    }
  };

  const defaultStartDateAndSec = () => {
    dispatch(action.seconds(null));
    dispatch(action.startDate(null));
  };

  return { defaultTimer };
};
