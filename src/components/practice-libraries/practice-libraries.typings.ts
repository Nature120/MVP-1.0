import { IPracticeLibraryProps } from './practice-library/practice-library.typings';

export interface IPracticeLibrariesProps {
  title: string;
  libraries: IPracticeLibraryProps[];
  isWithForwardArrow?: boolean;
}
