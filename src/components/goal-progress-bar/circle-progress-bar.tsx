import React from 'react';
import Svg, { Circle, G } from 'react-native-svg';

interface ICircleProgressBarProps {
  circumference: number;
  rotation: number;
  size: number;
  color: string;
  strokeWidth: number;
  circleRef: React.LegacyRef<Circle>;
}

export const CircleProgressBar: React.FC<ICircleProgressBarProps> = props => {
  const { circleRef, circumference, rotation, size, color, strokeWidth } = props;
  const radius = size / 2;
  const halfCircle = radius + strokeWidth;

  return (
    <Svg height={size} width={size} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
      <G rotation={`${rotation}`} origin={`${halfCircle}, ${halfCircle}`}>
        <Circle
          ref={circleRef}
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDashoffset={circumference}
          strokeDasharray={circumference}
        />
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeOpacity=".1"
        />
      </G>
    </Svg>
  );
};
