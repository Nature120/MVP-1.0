import { useState } from 'react';
import { useSelector } from 'react-redux';

import { updateUser } from '@services/api.service';
import { useAppDispatch } from '@services/hooks/redux';
import { getUid } from '@services/store/auth/auth.selectors';

export const useWhatBrings = () => {
  const [whatBrings, setWhatBrings] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const uid = useSelector(getUid);

  const onPress = async () => {
    await updateUser(uid, { whatBrings }, dispatch);
  };

  const onChangeVariants = (newVariants: string[]) => {
    setWhatBrings(newVariants);
  };

  return {
    whatBrings,
    onPress,
    onChangeVariants,
  };
};
