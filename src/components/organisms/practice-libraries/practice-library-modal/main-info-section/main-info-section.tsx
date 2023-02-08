import React from 'react';

import { Icon } from '@components/atoms/icon';
import { AdditionalInfo } from './additional-info/additional-info';
import { TeacherInfo } from './teacher-info/teacher-section-info';

import { ITeacher } from '@typings/common';

import { MainInfoSectionStyled as Styled } from './main-info-section.styles';

interface IProp {
  title: string;
  description: string;
  onToggleBookMark: () => void;
  toggleBookMark: boolean;
  isSubscriptionPractice: boolean;
  isLockPractice?: boolean;
  season: Array<string>;
  indoorOutdoor?: string;
  isAudioFile: boolean;
  teacher?: ITeacher;
}

export const MainInfoSection: React.FC<IProp> = ({ onToggleBookMark, toggleBookMark, isLockPractice, ...practice }) => {
  const { title, isAudioFile, description, teacher } = practice;

  return (
    <Styled.Container isLockPractice={isLockPractice}>
      <Styled.BookmarkBtn onPress={onToggleBookMark}>
        <Icon type={toggleBookMark ? 'checked_leaf' : 'unchecked_leaf'} width={35} height={35} />
      </Styled.BookmarkBtn>
      <Styled.TitleWrapper>
        {isLockPractice && <Icon type="lock" size={35} styles={Styled.LockSvg} />}
        <Styled.Title numberOfLines={2}>{title}</Styled.Title>
      </Styled.TitleWrapper>
      <AdditionalInfo practice={practice} isAudioFile={isAudioFile} />
      {!isLockPractice && <Styled.Description>{description}</Styled.Description>}
      {!isLockPractice && isAudioFile && <TeacherInfo teacher={teacher} />}
    </Styled.Container>
  );
};
