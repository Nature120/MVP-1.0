export interface IAskModalProps extends IUseAskModalProps {
  isVisible: boolean;
  onClose: () => void;
  modalText?: string;
  titleText: 'now' | 'today';
}

export interface IUseAskModalProps {
  onTextPress: (value: string, grade: number | null) => void | Promise<void>;
  onButtonPress: (value: string, grade: number | null) => void;
  onConfirmPress?: (grade: number) => void;
}
