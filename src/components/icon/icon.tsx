import React, { FC } from "react";
import { css } from "styled-components/native";

import { ICONS } from "./icon.constants";

// import { COLORS, TColors } from "@styles/colors";
import { IconStyles } from "./icon.styles";

export type TIconNames = keyof typeof ICONS;

export interface IIconProps {
  type: TIconNames;
  colorIcon?: any;
  size?: number;
  width?: number;
  height?: number;
  styles?: any;
  elevation?: number;
}

export const Icon: FC<IIconProps> = ({
  type,
  height,
  width,
  size,
  styles,
  colorIcon,
  elevation = 0,
}) => {
  const Image = ICONS[type];

  const imageHeight = height ?? size;
  const imageWidth = width ?? size;

  return (
    <IconStyles.Wrapper
      styles={css`
        width: ${imageWidth}px;
        height: ${imageHeight}px;
        ${styles};
      `}
    >
      <Image
        height={imageHeight}
        width={imageWidth}
        style={{
          //   color: colorIcon && COLORS[colorIcon],
          elevation,
        }}
      />
    </IconStyles.Wrapper>
  );
};
