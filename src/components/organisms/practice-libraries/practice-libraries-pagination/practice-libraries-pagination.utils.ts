import { databaseRef, getTeacher } from '@services/api.service';

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
  const practiceList = (await Promise.all(
    collection.docs.map(async item => {
      try {
        const data = item.data();
        if (data.teacher) {
          const teacher = await getTeacher(data.teacher);
          data.teacher = teacher;
        }
        return data;
      } catch (error) {
        console.log('error', error);
      }
    }),
  )) as IPracticeLibrary[];
  const nextLastPractice = collection.docs[collection.docs.length - 1];
  return { practiceList, nextLastPractice };
};
