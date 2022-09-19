import { IPracticeLibrary } from './practice-library/practice-library.typings';

export interface IPracticeLibrariesProps {
  title: string;
  libraries: IPracticeLibrary[];
  isWithForwardArrow?: boolean;
  isWithoutActions?: boolean;
}
