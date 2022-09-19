import { IPracticeLibrary } from '@components/practice-libraries/practice-library/practice-library.typings';

export interface IPractice {
  title: string;
  libraries: IPracticeLibrary[];
}
