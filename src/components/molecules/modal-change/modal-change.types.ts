import { ReactNode } from 'react';

export interface IModalChangeProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onDone: () => void;
}
