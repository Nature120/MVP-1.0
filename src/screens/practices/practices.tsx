import React from 'react';
import { StyleSheet } from 'react-native';

import { BackButton } from '@components/molecules/back-button';
import { Layout } from '@components/molecules/layout';
import { PracticeLibrariesPagination } from '@components/organisms/practice-libraries/practice-libraries-pagination';
import { usePractices } from './practices.state';

import { IMAGES } from '@constants/images';

import { StyledPractices as Styled } from './practices.styles';

import { COLOR } from '@theme/colors';
import { Spacer } from '@theme/components';

export const Practices: React.FC = () => {
  const { topCategories, setLoadingState, isLoading } = usePractices();

  return (
    <>
      {isLoading && (
        <Styled.Loader style={{ ...StyleSheet.absoluteFillObject }}>
          <Styled.Logo source={IMAGES.logo} />
        </Styled.Loader>
      )}
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
            {topCategories?.map((category, index) => (
              <Spacer key={category} gap={40} isLastItem={index === topCategories.length - 1}>
                <PracticeLibrariesPagination title={category} documentId={category} setLoading={setLoadingState} />
              </Spacer>
            ))}
          </Styled.Practices>
        </Styled.LayoutContent>
      </Layout>
    </>
  );
};
