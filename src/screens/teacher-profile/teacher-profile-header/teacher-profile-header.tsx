import React from 'react';

import { Icon } from '@components/atoms/icon';
import { BackButton } from '@components/molecules/back-button';
import { useTeacherProfileHeaderState } from './teacher-profile-header.state';

import { ITeacher } from '@typings/common';

import { TeacherProfileHeaderStyled as Styled } from './teacher-profile-header.styles';

interface IProp {
  teacher: ITeacher;
}

export const TeacherProfileHeader: React.FC<IProp> = ({ teacher }) => {
  const { handleShareDynamicLink } = useTeacherProfileHeaderState(teacher);

  return (
    <Styled.Container>
      <BackButton iconType="arrowLeft" width={22} height={22} cssButton={Styled.ArrowLeftBtn} />
      <Styled.UpdateBtn onPress={handleShareDynamicLink}>
        <Icon type="upload_simple" size={22} colorIcon="cloudyGreen" />
      </Styled.UpdateBtn>
    </Styled.Container>
  );
};
