import React from 'react';

import { Icon } from '@components/atoms/icon';
import { MediaPlayer } from './media-player/media-player';

import { IAudioFile } from '@typings/common';

import { MainInfoSectionStyled as Styled } from './main-info-section.styles';

interface IProp {
  title: string;
  description: string;
  onToggleBookMark: () => void;
  toggleBookMark: boolean;
  isSubscriptionPractice: boolean;
  isLockPractice?: boolean;
  toggleInfo?: boolean;
  audioFile?: IAudioFile;
}

export const MainInfoSection: React.FC<IProp> = ({
  title,
  description,
  onToggleBookMark,
  toggleBookMark,
  isLockPractice,
  toggleInfo,
  audioFile,
}) => {
  const isToogleInfo = toggleInfo === true;

  return (
    <>
      <Styled.BookmarkBtn onPress={onToggleBookMark}>
        <Icon type={toggleBookMark ? 'checked_leaf' : 'unchecked_leaf'} width={35} height={35} />
      </Styled.BookmarkBtn>
      <Styled.TitleWrapper>
        {isLockPractice && <Icon type="lock" size={35} styles={Styled.LockSvg} />}
        <Styled.Title numberOfLines={2}>{title}</Styled.Title>
      </Styled.TitleWrapper>
      {isToogleInfo ? (
        <MediaPlayer audioFile={audioFile} />
      ) : (
        <Styled.Description numberOfLines={isLockPractice ? 3 : 0}>{description}</Styled.Description>
      )}
    </>
  );
};
