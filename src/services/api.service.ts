import firestore from '@react-native-firebase/firestore';

import { IError } from '../typings/common.d';
import { TDispatch } from './store';
import { partialUpdateUser } from './store/auth/auth.actions';

import { IUser } from './store/auth/auth.typings';

type TCollection = 'Users' | 'Practise library' | 'Other text';

export const databaseRef = (collection: TCollection) => firestore().collection(collection);

export const userInstance = (uid: string) => {
  return databaseRef('Users').doc(uid);
};

export const getUser = async (uid: string) => {
  try {
    const response = await userInstance(uid).get();
    const data = response.data() as IUser;
    return data;
  } catch (err) {
    const error = err as IError;
    console.error(error);
  }
};

export const updateUser = async (uid: string, body: Partial<IUser>, dispatch?: TDispatch) => {
  try {
    await userInstance(uid).update(body);
    dispatch && dispatch(partialUpdateUser(body));
  } catch (err) {
    const error = err as IError;
    console.error(error);
  }
};
