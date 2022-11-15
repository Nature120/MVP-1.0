import React from 'react';

import { Loader } from '@components/atoms/loader/loader';
import { Spacer } from '@components/atoms/spacer';
import { BackButton } from '@components/molecules/back-button';
import { Layout } from '@components/molecules/layout';
import { PracticeLibrariesPagination } from '@components/organisms/practice-libraries/practice-libraries-pagination';
import { usePractices } from './practices.state';

import { StyledPractices as Styled } from './practices.styles';

import { COLOR } from '@theme/colors';

export const Practices: React.FC = () => {
  const { topCategories, setLoadingState, isLoading } = usePractices();

  return (
    <>
      {isLoading && <Loader />}
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

          <Styled.Space />
        </Styled.LayoutContent>
      </Layout>
    </>
  );
};
