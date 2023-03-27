import React from 'react';

import { LayoutWithGrayGreenGradient } from '@components/organisms/layout-with-gray-green-gradient/layout-with-gray-green-gradient';
import { useStateTeacherProfile } from './teacher-profile.state';
import { TeacherProfileHeader } from './teacher-profile-header/teacher-profile-header';
import { TeacherProfileMain } from './teacher-profile-main/teacher-profile-main';

export const TeacherProfileScreen = () => {
  const { selectedPractice, teacherPractices, handleScroll, isLoading, typedTeacher, isNotEmptyObject } =
    useStateTeacherProfile();

  return (
    <LayoutWithGrayGreenGradient handleScroll={handleScroll}>
      {isNotEmptyObject && (
        <>
          <TeacherProfileHeader teacher={typedTeacher} />
          <TeacherProfileMain
            teacher={typedTeacher}
            featuredPractice={selectedPractice}
            teacherPractices={teacherPractices}
            isLoading={isLoading}
          />
        </>
      )}
    </LayoutWithGrayGreenGradient>
  );
};
