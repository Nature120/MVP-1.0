import { IPracticeLibrary } from '@typings/common';

export interface IPracticeLibrariesProps {
  title: string;
  libraries: IPracticeLibrary[];
  isWithForwardArrow?: boolean;
  isWithoutActions?: boolean;
}
