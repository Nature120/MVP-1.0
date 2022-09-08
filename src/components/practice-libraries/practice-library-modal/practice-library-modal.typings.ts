import { IPracticeLibraryProps } from '../practice-library/practice-library.typings';

export interface IPracticeLibraryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  library: IPracticeLibraryProps;
  isWithoutActions?: boolean;
}
