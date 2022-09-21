import React from 'react';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

interface IProp {
  strokeWidth: number;
}

export const RingShadow: React.FC<IProp> = ({ strokeWidth }) => (
  <Svg width={strokeWidth} height={strokeWidth}>
    <Defs>
      <RadialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="shadow">
        <Stop offset="0%" stopOpacity={1} />
        <Stop offset="50%" stopOpacity={0.5} stopColor="black" />
        <Stop offset="100%" stopOpacity={0.1} stopColor="black" />
      </RadialGradient>
    </Defs>
    <Circle cx={strokeWidth / 2} cy={strokeWidth / 2} r={strokeWidth / 2} fill="url(#shadow)" />
  </Svg>
);
