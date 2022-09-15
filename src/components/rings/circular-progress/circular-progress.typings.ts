import Animated from 'react-native-reanimated';

export interface ICircularProgressProps {
  theta: Animated.Node<number>;
  bg: React.ReactNode;
  fg: React.ReactNode;
  radius: number;
}
