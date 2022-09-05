import React from 'react';
import { Text } from 'react-native';

import { StyledDashboard as Styled } from './dashboard.styles';

export const Dashboard: React.FC = () => {
  return (
    <Styled.Dashboard>
      <Text>Dashboard</Text>
    </Styled.Dashboard>
  );
};
