export interface IAskModalProps extends IUseAskModalProps {
  isVisible: boolean;
  onClose: () => void;
  modalText?: string;
  onModalHide?: () => void;
}

export interface IUseAskModalProps {
  onTextPress: () => void | Promise<void>;
  onButtonPress: (value: string) => void;
}
