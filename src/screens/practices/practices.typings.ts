import { IPracticeLibraryProps } from '@components/practice-libraries/practice-library/practice-library.typings';

export interface IPractice {
  title: string;
  libraries: IPracticeLibraryProps[];
}
