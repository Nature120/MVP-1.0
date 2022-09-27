import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ITextCheckBox } from '@components/molecules/text-checkbox/text-checkbox.typings';

import { databaseRef, updateUser } from '@services/api.service';
import { useAppDispatch } from '@services/hooks/redux';
import { getUid } from '@services/store/auth/auth.selectors';

export const useWhatBrings = () => {
  const [whatBrings, setWhatBrings] = useState<string[]>([]);
  const [whatBringsVariants, setWhatBringsVariants] = useState<ITextCheckBox[]>([]);
  const dispatch = useAppDispatch();

  const uid = useSelector(getUid);

  useEffect(() => {
    const getVariants = async () => {
      const res = await databaseRef('Other text').doc('Top Categories').get();
      const uIds: ITextCheckBox[] = res
        .data()!
        .topCategories.map((category: string) => ({ text: category.toUpperCase(), value: category }));

      setWhatBringsVariants(uIds);
    };

    getVariants();
  }, []);

  const onPress = async () => {
    await updateUser(uid, { whatBrings }, dispatch);
  };

  const onChangeVariants = (newVariants: string[]) => {
    setWhatBrings(newVariants);
  };

  return {
    whatBrings,
    whatBringsVariants,
    onPress,
    onChangeVariants,
  };
};
