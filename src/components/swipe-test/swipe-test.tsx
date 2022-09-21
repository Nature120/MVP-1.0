import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SwipeButton } from '@arelstone/react-native-swipe-button';

import { Icon } from '@components/icon';

import swipeToEndArrow from '@assets/icons/swipe-to-end-arrow.svg';

export const SwipeTest = () => {
  return (
    <>
      <SwipeButton
        circleBackgroundColor={'red'}
        underlayStyle={{ backgroundColor: 'transparent' }}
        height={70}
        Icon={<Icon type="swipeToEndArrow" colorIcon="white" width={33} height={28} />}
        title="Hellow"
        titleStyle={{ color: 'red' }}
        onComplete={() => <></>}
      />
    </>
  );
};
