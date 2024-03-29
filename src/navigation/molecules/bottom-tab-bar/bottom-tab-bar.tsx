import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Icon } from '@components/atoms/icon';

import { bottomTabBarHitSlop, getIconProps } from './bottom-tab-bar.constants';

import { StyledBottomTabBar as Styled } from './bottom-tab-bar.styles';

export const BottomTabBar: React.FC<BottomTabBarProps> = props => {
  const {
    state: { routes, index },
    navigation,
  } = props;

  const onPress = (isFocused: boolean, routeName: string) => () => {
    !isFocused && navigation.navigate(routeName);
  };

  return (
    <Styled.Wrapper>
      <SafeAreaView edges={['bottom']}>
        <Styled.BottomTabBar>
          {routes.map(({ name }, routeIndex) => (
            <Styled.BarButton key={name} onPress={onPress(index === routeIndex, name)} hitSlop={bottomTabBarHitSlop}>
              <Icon {...getIconProps(index === routeIndex, name)} />
              <Styled.Text>{name}</Styled.Text>
            </Styled.BarButton>
          ))}
        </Styled.BottomTabBar>
      </SafeAreaView>
    </Styled.Wrapper>
  );
};
