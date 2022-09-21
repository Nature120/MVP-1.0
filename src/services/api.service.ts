import firestore from '@react-native-firebase/firestore';

import { IError } from '../typings/common.d';
import { TDispatch } from './store';
import { partialUpdateUser } from './store/auth/auth.actions';

import { IUser } from './store/auth/auth.interface';

// import axios, { AxiosRequestConfig } from 'axios';

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

// import { APP_CONFIG } from '@constants/config';

// const getInstance = () => {
//   const instance = axios.create({
//     baseURL: APP_CONFIG.BASE_API_URL,
//     timeout: 15000,
//   });

//   instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
//     return config;
//   });

//   return instance;
// };

// export const getRequest = async (requestUrl: string) => {
//   const { data } = await getInstance().get(requestUrl);

//   return data;
// };

// export const postRequest = async (requestUrl: string, payload: object) => {
//   const { data } = await getInstance().post(requestUrl, payload);

//   return data;
// };

// export const deleteRequest = async (requestUrl: string) => {
//   const { data } = await getInstance().delete(requestUrl);

//   return data;
// };

// export const putRequest = async (requestUrl: string, payload: object) => {
//   const { data } = await getInstance().put(requestUrl, payload);

//   return data;
// };
