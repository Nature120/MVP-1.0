import React from 'react';

import { Icon } from '@components/atoms/icon';

import { MainInfoSectionStyled as Styled } from './main-info-section.styles';

interface IProp {
  title: string;
  description: string;
  onToggleBookMark: () => void;
  toggleBookMark: boolean;
  isSubscriptionPractice: boolean;
  isLockPractice?: boolean;
}

export const MainInfoSection: React.FC<IProp> = ({
  title,
  description,
  onToggleBookMark,
  toggleBookMark,
  isLockPractice,
}) => {
  return (
    <>
      <Styled.BookmarkBtn onPress={onToggleBookMark}>
        <Icon type={toggleBookMark ? 'checked_leaf' : 'unchecked_leaf'} width={35} height={35} />
      </Styled.BookmarkBtn>
      <Styled.TitleWrapper>
        {isLockPractice && <Icon type="lock" size={35} styles={Styled.LockSvg} />}
        <Styled.Title numberOfLines={2}>{title}</Styled.Title>
      </Styled.TitleWrapper>
      <Styled.Description numberOfLines={isLockPractice ? 3 : 0} isFirst>
        {description}
      </Styled.Description>
    </>
  );
};
