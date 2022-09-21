import React, { useEffect, useState } from 'react';

import { libraries } from '@screens/immersions/mock-data';
import { BackButton } from '@components/back-button';
import { Layout } from '@components/molecules/layout';
import { PracticeLibraries } from '@components/organisms/practice-libraries';

import { IPractice } from './practices.typings';

import { StyledPractices as Styled } from './practices.styles';

import { COLOR } from '@theme/colors';
import { Spacer } from '@theme/components';

const mockReceivedCollections: IPractice[] = [
  { title: 'Mental Health', libraries },
  { title: 'Reconnect With Nature', libraries },
  { title: 'Calm Anxiety', libraries },
];

export const Practices: React.FC = () => {
  const [receivedCollections, setReceivedCollections] = useState<IPractice[]>();

  useEffect(() => {
    //TODO pull from DB
    setReceivedCollections(mockReceivedCollections);
  }, []);

  return (
    <Layout
      isWithoutMargin
      isWithScroll
      bgColor="extraLightMint"
      elasticScrollColor={COLOR.background.white}
      elasticScrollPosition="bottom">
      <Styled.LayoutContent>
        <Styled.BackButtonWrapper>
          <BackButton height={22} width={22} color="cloudyGreen" />
        </Styled.BackButtonWrapper>
        <Styled.Practices>
          {receivedCollections?.map((collection, index, collections) => (
            <Spacer key={collection.title} gap={40} isLastItem={index === collections.length - 1}>
              <PracticeLibraries title={collection.title} libraries={collection.libraries} />
            </Spacer>
          ))}
        </Styled.Practices>
      </Styled.LayoutContent>
    </Layout>
  );
};
