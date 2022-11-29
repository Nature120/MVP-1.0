import { Dispatch, SetStateAction } from 'react';

export interface IValue {
  email: string;
  password: string;
  first_name: string;
}

export interface IRegister {
  email: string;
  password: string;
  first_name: string;
}

export interface IProp {
  title: TTitle;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

type TTitle = 'terms' | 'privacy';
