import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

import { getFirstName } from './get-firstName';

import { TFirebaseUserCredentials } from '@typings/common';

interface IStoreDB {
  first_name?: string;
  response: TFirebaseUserCredentials | void;
}

type TData = { email: string | null; first_name?: string };

interface ISaveInDB {
  data: TData;
  uid: string;
}

export const storeInDB = async ({ response, first_name: registerFirstName }: IStoreDB) => {
  if (response === undefined) {
    return;
  }
  const { displayName, email, uid } = response.user;
  const user = await firestore().collection('Users').doc(uid).get();
  if (user.exists) {
    await AsyncStorage.setItem('isFirstLaunchNature120', 'false');
    return;
  }
  const name = getFirstName(displayName);
  let data = { first_name: name, email, finishedPractices: [], recentPractices: [], bookmarks: [] };
  if (displayName === null) {
    data = { first_name: registerFirstName, email, finishedPractices: [], recentPractices: [], bookmarks: [] };
  }

  await AsyncStorage.setItem('isFirstLaunchNature120', 'true');

  fireStoreSetDB({ data, uid });
};

export const fireStoreSetDB = ({ data, uid }: ISaveInDB) => {
  const usersRef = firestore().collection('Users');
  usersRef.doc(uid).set(data);
};
