import firestore from '@react-native-firebase/firestore';

import { IError, ITeacher } from '../typings/common.d';
import { TDispatch } from './store';
import { partialUpdateUser } from './store/auth/auth.actions';

import { IUser } from './store/auth/auth.typings';
import { IPracticeLibrary } from '@typings/common';

type TCollection = 'Users' | 'Practise library' | 'Other text' | 'Teachers';

export const databaseRef = (collection: TCollection) => firestore().collection(collection);

export const userInstance = (uid: string) => {
  return databaseRef('Users').doc(uid);
};

export const teacherInstance = (uid: string) => {
  return databaseRef('Teachers').doc(uid);
};

export const getFeaturedPractice = async (id: string) => {
  try {
    const response = await databaseRef('Practise library').doc(id).get();
    return response.data() as IPracticeLibrary;
  } catch (err) {
    const error = err as IError;
    console.error(error);
  }
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

export const fetchTeachers = async () => {
  try {
    const querySnapshot = await firestore().collection('Teachers').get();
    const data = querySnapshot.docs.map(teacher => teacher.data()) as ITeacher[];
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
