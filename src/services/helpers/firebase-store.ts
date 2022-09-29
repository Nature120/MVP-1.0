import firestore from '@react-native-firebase/firestore';

import { getFirstName } from './get-firstName';

import { TFirebaseUserCredentials } from '@typings/common';

interface IStoreDB {
  first_name?: string;
  response: TFirebaseUserCredentials | void;
}

interface ISaveInDB {
  data: TData;
  uid: string;
}

type TData = { email: string | null; first_name?: string };

export const storeWithSocial = async ({ response, first_name: registerFirstName }: IStoreDB) => {
  if (response === undefined) {
    return;
  }
  const { displayName, email, uid } = response.user;
  const user = await firestore().collection('Users').doc(uid).get();
  const isExistUser = user.exists === true;
  if (isExistUser) {
    return false;
  }

  const name = getFirstName(displayName);
  let data = { first_name: name, email, finishedPractices: [], recentPractices: [] };
  if (displayName === null) {
    data = { first_name: registerFirstName, email, finishedPractices: [], recentPractices: [] };
  }

  saveInDB({ data, uid });
  return true;
};

export const saveInDB = ({ data, uid }: ISaveInDB) => {
  const usersRef = firestore().collection('Users');
  usersRef.doc(uid).set(data);
};
