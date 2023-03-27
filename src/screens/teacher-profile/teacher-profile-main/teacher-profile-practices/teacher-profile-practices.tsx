import React from 'react';

import { FeaturedPractice } from './featured-practice/featured-practice';
import { TeacherPractices } from './teacher-practices/teacher-practices';

import { isIOS } from '@services/helpers/device-utils';

import { IPracticeLibrary, ITeacher } from '@typings/common';

import { TeacherProfilePracticesStyled as Styled } from './teacher-profile-practices.styles';

interface IProp {
  teacher: ITeacher;
  featuredPractice: IPracticeLibrary;
  teacherPractices: IPracticeLibrary[];
  isLoading: boolean;
}

export const TeacherProfilePractices: React.FC<IProp> = ({
  featuredPractice,
  teacherPractices,
  teacher,
  isLoading,
}) => {
  const { audioPractices } = teacher;

  return (
    <Styled.Container>
      <Styled.Title>Featured Practice</Styled.Title>
      <FeaturedPractice featuredPractice={featuredPractice} />
      <TeacherPractices teacherPractices={teacherPractices} audioPractices={audioPractices} />
      {!isIOS && <Styled.LoadingText>{isLoading && 'Loading...'}</Styled.LoadingText>}
    </Styled.Container>
  );
};
