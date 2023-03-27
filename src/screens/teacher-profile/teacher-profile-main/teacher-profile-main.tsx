import React from 'react';

import { LayoutMainSection } from '@components/organisms/layout-main-section/layout-main-section';
import { TeacherProfileAbout } from './teacher-profile-about/teacher-profile-about';
import { TeacherProfileBar } from './teacher-profile-bar/teacher-profile-bar';
import { TeacherProfileInfo } from './teacher-profile-info/teacher-profile-info';
import { useTeacherProfileMainState } from './teacher-profile-main.state';
import { IProp } from './teacher-profile-main.types';
import { TeacherProfilePractices } from './teacher-profile-practices/teacher-profile-practices';

import { TeacherProfileMainStyled as Styled } from './teacher-profile-main.styles';

export const TeacherProfileMain: React.FC<IProp> = ({ teacher, featuredPractice, teacherPractices, isLoading }) => {
  const { checkedButton, setCheckedButton } = useTeacherProfileMainState();
  const isPracticesButton = checkedButton === 'Practices';

  return (
    <LayoutMainSection cssStyles={Styled.Container}>
      <TeacherProfileInfo teacher={teacher} />
      <TeacherProfileBar setCheckedButton={setCheckedButton} isPracticesButton={isPracticesButton} />
      <Styled.ContentWrapper>
        {isPracticesButton ? (
          <TeacherProfilePractices
            isLoading={isLoading}
            teacher={teacher}
            featuredPractice={featuredPractice}
            teacherPractices={teacherPractices}
          />
        ) : (
          <TeacherProfileAbout teacher={teacher} />
        )}
      </Styled.ContentWrapper>
    </LayoutMainSection>
  );
};
