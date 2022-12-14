import { Dispatch, SetStateAction } from 'react';

export interface IProp {
  isCheckedTerms: boolean;
  isCheckedPrivacy: boolean;
  isBoxesChecked: boolean;
  isWarningCheckBoxBorder: boolean;
  setIsCheckedPrivacy: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCheckedTerms: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export interface IPropButtonConfirm {
  title: TTitle;
  isChecked: boolean;
  isWarningCheckBoxBorder: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

type TTitle = 'terms' | 'privacy';
