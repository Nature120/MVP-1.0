import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Image } from '@components/atoms/image';

import { useTeacherHook } from '@services/hooks/teacherHook';

import { APP_ROUTES } from '@constants/routes';

import { IProp } from './teacher-section-info.typings';
import { ITeacher } from '@typings/common';

import { TeacherInfoStyled as Styled } from './teacher-info.styles';

export const TeacherInfo = ({ teacherName, closeModal }: IProp) => {
  const { teacher } = useTeacherHook(teacherName);
  const { navigate } = useNavigation() as any;

  const { avatar, fullName, teacherTitle, location } = teacher as ITeacher;

  const onPressTeacher = () => {
    if (!closeModal) {
      return;
    }

    closeModal();
    navigate(APP_ROUTES.teacherProfile, { teacherName: fullName });
  };

  return (
    <Styled.Container onPress={onPressTeacher}>
      <Image source={{ uri: avatar }} width={60} height={60} styles={Styled.Image} />
      <Styled.WrapperTeacherInfo>
        <Styled.TextFullName>{fullName}</Styled.TextFullName>
        <Styled.TextLocation style={{ maxWidth: '90%' }}>{teacherTitle}</Styled.TextLocation>
        <Styled.TextLocation>{location}</Styled.TextLocation>
      </Styled.WrapperTeacherInfo>
    </Styled.Container>
  );
};
