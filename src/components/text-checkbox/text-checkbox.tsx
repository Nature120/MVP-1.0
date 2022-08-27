import React from 'react';
import { moderateScale } from 'react-native-size-matters';

import { Icon } from '@components/icon';
import { StyledTextCheckbox as Styled } from './text-checkbox.styles';
import { TTextCheckboxProps } from './text-checkbox.typings';

export const TextCheckbox: React.FC<TTextCheckboxProps> = props => {
  const { onChange, isChecked, text, name, icon, renderComponent, borderRadius, styles, iconSize } = props;

  const onPress = () => onChange && onChange(!isChecked, name || '');

  return (
    <Styled.TextCheckbox
      isCustomComponent={!!renderComponent}
      isChecked={isChecked}
      borderRadius={borderRadius}
      onPress={onPress}
      isWithIcon={!!icon}
      activeOpacity={0.5}
      styles={styles}>
      {renderComponent ? (
        renderComponent
      ) : (
        <>
          {icon && (
            <Styled.IconWrapper>
              <Icon
                type={icon}
                colorIcon={isChecked ? 'white' : 'blue'}
                height={moderateScale(iconSize?.height || 25)}
                width={moderateScale(iconSize?.width || 25)}
              />
            </Styled.IconWrapper>
          )}

          <Styled.Text numberOfLines={1} isChecked={isChecked}>
            {text}
          </Styled.Text>
        </>
      )}
    </Styled.TextCheckbox>
  );
};
