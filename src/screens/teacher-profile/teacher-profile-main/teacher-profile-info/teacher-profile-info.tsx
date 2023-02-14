import React from 'react';

import { Icon } from '@components/atoms/icon';
import { Image } from '@components/atoms/image';

import { ITeacher } from '@typings/common';

import { TeacherProfileInfoStyled as Styled } from './teacher-profile-info.styles';

type TProp = { teacher: ITeacher };

export const TeacherProfileInfo: React.FC<TProp> = ({ teacher }) => {
  const { avatar, fullName, teacherTitle, location } = teacher;
  return (
    <Styled.Container>
      <Styled.AvatarBackground>
        <Image source={{ uri: avatar }} width={128} height={128} styles={Styled.Avatar} />
      </Styled.AvatarBackground>
      <Styled.TitleText marginTop={85}>{fullName},</Styled.TitleText>
      <Styled.TitleText marginTop={4}>{teacherTitle}</Styled.TitleText>
      <Styled.LocationWrapper>
        <Icon type="map_pin" size={22} colorIcon={'cloudyBlue'} styles={Styled.MapPinIcon} />
        <Styled.TextLocation>{location}</Styled.TextLocation>
      </Styled.LocationWrapper>
    </Styled.Container>
  );
};
