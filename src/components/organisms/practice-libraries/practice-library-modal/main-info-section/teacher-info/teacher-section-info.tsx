import React from 'react';

import { Image } from '@components/atoms/image';

import { useTeacherHook } from '@services/hooks/teacherHook';

import { IProp } from './teacher-section-info.typings';
import { ITeacher } from '@typings/common';

import { TeacherInfoStyled as Styled } from './teacher-info.styles';

export const TeacherInfo = ({ teacherName }: IProp) => {
  const { teacher } = useTeacherHook(teacherName);

  const { avatar, fullName, teacherTitle, location } = teacher as ITeacher;

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
