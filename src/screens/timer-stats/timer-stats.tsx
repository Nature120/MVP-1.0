import React from 'react';
import { View } from 'react-native';

import { Image } from '@components/atoms/image';
import { Layout } from '@components/molecules/layout';

export const TimerStats: React.FC = () => {
  return (
    <Layout isWithGradient ellipseColor="light-green">
      <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Image source={{ uri: 'https://i.postimg.cc/x1rTwsw4/Group-138.png' }} height={273} width={239} />
      </View>
    </Layout>
  );
};
