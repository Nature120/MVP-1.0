import { IPracticeLibrary } from '../practice-library/practice-library.typings';

export interface IPracticeLibraryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  library: IPracticeLibrary;
  isWithoutActions?: boolean;
}
