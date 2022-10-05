import { useEffect } from 'react';
import {
  checkDndAccess,
  requestDndAccess,
  RINGER_MODE,
  useRingerMode,
  VolumeManager,
} from 'react-native-volume-manager';
import { useDispatch, useSelector } from 'react-redux';

import { isIOS } from '@services/helpers/device-utils';
import { isDisturb } from '@services/store/auth/auth.actions';
import { getIsDisturb } from '@services/store/auth/auth.selectors';

export const useStateToggleDoNotDisturb = () => {
  const dispatch = useDispatch();
  const getDisturb = useSelector(getIsDisturb);
  const { mode, setMode } = useRingerMode();

  useEffect(() => {
    const listener = changeListener();

    return () => {
      listener.remove();
    };
  }, []);

  const changeListener = () => {
    if (isIOS) {
      return VolumeManager.addSilentListener(RingerSilentStatus => {
        dispatch(isDisturb(RingerSilentStatus.isMuted));
      });
    }
    return VolumeManager.addRingerListener(RingerSilentStatus => {
      dispatch(isDisturb(RingerSilentStatus.status));
    });
  };

  const onChange = async (toggleValue: boolean) => {
    const newMode = switchMode(toggleValue);
    ////Check permmision if silent mode///
    if (newMode === RINGER_MODE.silent || mode === RINGER_MODE.silent) {
      const hasDndAccess = await checkDndAccess();

      if (!hasDndAccess) {
        const permission = await requestDndAccess();
        permission && dispatch(isDisturb(mode === 0 ? true : false));
        return;
      }
    }

    setMode(newMode);
  };

  const switchMode = (toggleValue: boolean) => {
    return toggleValue ? RINGER_MODE.silent : RINGER_MODE.normal;
  };

  return { onChange, getDisturb };
};
