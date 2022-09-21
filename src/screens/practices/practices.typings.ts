import { IPracticeLibrary } from '@components/organisms/practice-libraries/practice-library/practice-library.typings';

export interface IPractice {
  title: string;
  libraries: IPracticeLibrary[];
}
