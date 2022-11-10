import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { Image } from '@components/atoms/image';
import { Layout } from '@components/molecules/layout';

const style: StyleProp<ViewStyle> = { justifyContent: 'center', alignItems: 'center', height: '100%' };

export const Community: React.FC = () => {
  return (
    <Layout isWithGradient ellipseColor="light-green">
      <View style={style}>
        <Image source={{ uri: 'https://i.postimg.cc/x1rTwsw4/Group-138.png' }} height={273} width={239} />
      </View>
    </Layout>
  );
};
