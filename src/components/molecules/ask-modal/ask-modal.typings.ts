export interface IAskModalProps {
  isVisible: boolean;
  onClose: () => void;
  modalText?: string;
  onTextPress: () => void | Promise<void>;
  onButtonPress: (value: string) => void;
  onModalHide?: () => void;
}
