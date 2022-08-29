import { StyleProp, ViewStyle } from 'react-native';
import { Animation, CustomAnimation } from 'react-native-animatable';
import { Direction } from 'react-native-modal';

type TPositionHorizontal = 'center' | 'flex-end' | 'flex-start';

type TPositionVertical = 'flex-end' | 'flex-start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

export interface IModalWindowProps {
  isVisible: boolean;
  avoidKeyboard?: boolean;
  isBackdropPress?: boolean;
  children: React.ReactNode;
  swipeDirection?: Direction[];
  backdropOpacity?: number;
  positionVertical?: TPositionVertical;
  animationInTiming?: number;
  animationOutTiming?: number;
  positionHorizontal?: TPositionHorizontal;
  modalStyle?: StyleProp<ViewStyle>;
  animationIn?: Animation | CustomAnimation;
  animationOut?: Animation | CustomAnimation;
  onClose?: () => void;
  onModalWillShow?: () => void;
}
