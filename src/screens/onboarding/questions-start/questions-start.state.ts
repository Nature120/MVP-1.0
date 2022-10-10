import { useEffect, useState } from 'react';

import { ITextCheckBox } from '@components/molecules/text-checkbox/text-checkbox.typings';

import { databaseRef } from '@services/api.service';

export const useQuestionsStart = () => {
  const [whatBringsVariants, setWhatBringsVariants] = useState<ITextCheckBox[]>([]);

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
