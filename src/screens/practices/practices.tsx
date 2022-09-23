import React, { useEffect, useState } from 'react';

import { BackButton } from '@components/back-button';
import { Layout } from '@components/molecules/layout';
import { PracticeLibraries } from '@components/organisms/practice-libraries';

import { databaseRef } from '@services/api.service';

import { IPractice } from './practices.typings';

import { StyledPractices as Styled } from './practices.styles';

import { COLOR } from '@theme/colors';
import { Spacer } from '@theme/components';

export const Practices: React.FC = () => {
  const [receivedCollections, setReceivedCollections] = useState<IPractice[]>();

  useEffect(() => {
    const getLibraries = async () => {
      const res = await databaseRef('Practise library').get();
      const uIds = res.docs.map(doc => doc.id);

      const getLibrariesPromise = uIds.map(async (title: string) => {
        const result = await databaseRef('Practise library').doc(title).get();
        const libraries = result.data()!.data;
        return {
          title,
          libraries,
        };
      });

      const libDocs = await Promise.all(getLibrariesPromise);

      setReceivedCollections(libDocs);
    };

    getLibraries();
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
