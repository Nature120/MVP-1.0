import { databaseRef } from '@services/api.service';

import { IGetPracticesByFilter } from './practice-libraries-pagination.typings';
import { IPracticeLibrary } from '@typings/common';

const practicesRef = () => databaseRef('Practise library');

const ITEMS_PER_PAGE = 4;

export const getPracticesByFilter = async ({ searchedDocs, lastPracticeDoc, searchField }: IGetPracticesByFilter) => {
  const isArray = Array.isArray(searchedDocs);

  let query = practicesRef().where(searchField || 'topCategory', isArray ? 'in' : '==', searchedDocs);

  if (lastPracticeDoc !== undefined) {
    query = query.startAfter(lastPracticeDoc);
  }

  const collection = await query?.limit(ITEMS_PER_PAGE).get();
  const practiceList = collection.docs.map(item => item.data() as IPracticeLibrary);
  const nextLastPractice = collection.docs[collection.docs.length - 1];
  return { practiceList, nextLastPractice };
};
