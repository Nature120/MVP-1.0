import { databaseRef } from '@services/api.service';

import { IPracticeLibrary, TDocument } from '@typings/common';

const practicesRef = () => databaseRef('Practise library');

const ITEMS_PER_PAGE = 4;

export const getPracticesByCategories = async (topCategory: string | string[], lastPracticeDoc?: TDocument) => {
  const isArray = Array.isArray(topCategory);

  let query = practicesRef().where('topCategory', isArray ? 'in' : '==', topCategory);

  if (lastPracticeDoc !== undefined) {
    query = query.startAfter(lastPracticeDoc);
  }

  const collection = await query?.limit(ITEMS_PER_PAGE).get();
  const practiceList = collection.docs.map(item => item.data() as IPracticeLibrary);
  const nextLastPractice = collection.docs[collection.docs.length - 1];
  return { practiceList, nextLastPractice };
};
