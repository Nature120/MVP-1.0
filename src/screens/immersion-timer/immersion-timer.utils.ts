import firestore from '@react-native-firebase/firestore';

import { MAX_RECENT_LIBRARIES_COUNT } from '@screens/immersions/immersions.utils';

import { getUser, updateUser } from '@services/api.service';
import { IFinishedPractices } from '@services/store/auth/auth.typings';

const removeRestRecentPractices = async (uid: string, recentPractices: IFinishedPractices[]) => {
  if (recentPractices.length < MAX_RECENT_LIBRARIES_COUNT) {
    return;
  }

  const restCount = recentPractices.length - MAX_RECENT_LIBRARIES_COUNT;
  const remove = recentPractices.slice(0, restCount);

  const removePromise = remove.map(item =>
    updateUser(uid, {
      recentPractices: firestore.FieldValue.arrayRemove(item) as unknown as IFinishedPractices[],
    }),
  );

  await Promise.all(removePromise);
};

const removePracticeDublicate = async (uid: string, recentPractices: IFinishedPractices[], practiceTitle: string) => {
  const practiceDublicate = recentPractices.find(practice => practice.title === practiceTitle);

  if (!practiceDublicate) {
    return;
  }

  const updatedRecentPractices = firestore.FieldValue.arrayRemove(practiceDublicate) as unknown as IFinishedPractices[];

  await updateUser(uid, { recentPractices: updatedRecentPractices });
};

export const clearRecentPractices = async (
  uid: string,
  practiceTitle: string,
  userRecentPractices?: IFinishedPractices[],
) => {
  if (userRecentPractices) {
    await removeRestRecentPractices(uid, userRecentPractices);
    await removePracticeDublicate(uid, userRecentPractices, practiceTitle);
  } else {
    const userInfo = await getUser(uid);

    if (!userInfo) {
      return;
    }

    const { recentPractices: userFetchedRecentPractices } = userInfo;

    await removeRestRecentPractices(uid, userFetchedRecentPractices);
    await removePracticeDublicate(uid, userFetchedRecentPractices, practiceTitle);
  }
};
