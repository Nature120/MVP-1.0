import React from 'react';

import { Icon } from '@components/atoms/icon';
import { LeafButton } from '@components/molecules/leaf-button/leaf-button';
import { AdditionalInfo } from './additional-info/additional-info';
import { TeacherInfo } from './teacher-info/teacher-section-info';

import { IPracticeLibrary } from '@typings/common';

import { MainInfoSectionStyled as Styled } from './main-info-section.styles';

interface IProp {
  library: IPracticeLibrary;
  isLockPractice?: boolean;
  isAudioFile: boolean;
}

export const MainInfoSection: React.FC<IProp> = ({ isLockPractice, library, isAudioFile }) => {
  const { title, description, teacher } = library;

  return (
    <Styled.Container isLockPractice={isLockPractice}>
      <LeafButton library={library} width={35} height={35} cssButton={Styled.BookmarkBtn} />
      <Styled.TitleWrapper>
        {isLockPractice && <Icon type="lock" size={35} styles={Styled.LockSvg} />}
        <Styled.Title numberOfLines={2}>{title}</Styled.Title>
      </Styled.TitleWrapper>
      <AdditionalInfo practice={library} isAudioFile={isAudioFile} />
      {!isLockPractice && <Styled.Description>{description}</Styled.Description>}
      {!isLockPractice && isAudioFile && <TeacherInfo teacherName={teacher} />}
    </Styled.Container>
  );
};
