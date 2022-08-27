import React, { FC } from 'react';

import { COLOR } from '@theme/colors';
import { css } from 'styled-components/native';
import { ICONS } from './icon.constants';
import { IconStyles } from './icon.styles';
import { IIconProps } from './icon.typings';

export const Icon: FC<IIconProps> = ({ type, height, width, size, styles, colorIcon, elevation = 0 }) => {
  const Image = ICONS[type];

  const imageHeight = height ?? size;
  const imageWidth = width ?? size;

  return (
    <IconStyles.Wrapper
      styles={css`
        width: ${imageWidth}px;
        height: ${imageHeight}px;
        ${styles};
      `}>
      <Image
        fill={colorIcon && COLOR.icon[colorIcon]}
        height={imageHeight}
        width={imageWidth}
        style={{
          elevation,
        }}
      />
    </IconStyles.Wrapper>
  );
};
