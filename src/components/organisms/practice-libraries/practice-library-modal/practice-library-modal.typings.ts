import { IPracticeLibrary } from '@typings/common';

export interface IPracticeLibraryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  library: IPracticeLibrary;
  isWithoutActions?: boolean;
  isWithoutAskModal?: boolean;
}
