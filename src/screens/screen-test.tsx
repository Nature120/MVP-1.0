import React from 'react';
import { Text, View } from 'react-native';

import { FONTS } from '@theme/fonts';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  font-family: ${FONTS.family.regularNewOrder};
  font-weight: ${FONTS.weight.regular};
  font-size: ${FONTS.size.xMedium};
  line-height: 17px;
  color: #163045;
`;
const StyledText2 = styled.Text`
  font-family: ${FONTS.family.mediumAcumin};
  font-style: normal;
  font-weight: ${FONTS.weight.semiBold};
  font-size: ${FONTS.size.large};
  line-height: 29px;
  color: #163045;
`;

export const ScreenTest = () => {
  return (
    <View>
      <Text style={{ fontFamily: FONTS.family.mediumNewOrder }}>
        The world’s first nature therapy app2333
      </Text>
      <StyledText>The world’s first nature therapy app</StyledText>
      <StyledText2>
        Turn time spent in nature into moments of wonder & healing
      </StyledText2>
    </View>
  );
};
