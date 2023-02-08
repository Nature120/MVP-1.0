import React from 'react';

import { Image } from '@components/atoms/image';

import { IProp } from './teacher-section-info.typings';
import { ITeacher } from '@typings/common';

import { TeacherInfoStyled as Styled } from './teacher-info.styles';

export const TeacherInfo = ({ teacher }: IProp) => {
  const { avatar, fullName, location, teacherTitle } = teacher as ITeacher;

  return (
    <Styled.Container>
      <Image source={{ uri: avatar }} width={60} height={60} styles={Styled.Image} />
      <Styled.WrapperTeacherInfo>
        <Styled.TextFullName>{fullName}</Styled.TextFullName>
        <Styled.TextLocation>{teacherTitle}</Styled.TextLocation>
        <Styled.TextLocation>{location}</Styled.TextLocation>
      </Styled.WrapperTeacherInfo>
    </Styled.Container>
  );
};
