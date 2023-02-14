import { IPracticeLibrary } from '@typings/common';

export interface IPracticeLibraryProps extends IPracticeLibrary {
  isWithoutActions?: boolean;
  isWithoutAskModal?: boolean;
}
