import React from 'react';

import { Layout } from '@components/layout';
import { SignUp } from '@components/sign-up/sign-up';

export const AuthScreen = () => {
  return (
    <Layout isWithScroll={true}>
      <SignUp />
    </Layout>
  );
};
