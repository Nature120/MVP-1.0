import React from 'react';

import { Icon } from '@components/atoms/icon';

import { onPressLink } from '@services/helpers/utils';

import { ITeacher } from '@typings/common';

import { TeacherProfileAboutStyled as Styled } from './teacher-profile-about.styles';

interface IProp {
  teacher: ITeacher;
}

export const TeacherProfileAbout: React.FC<IProp> = ({ teacher }) => {
  const { biography, languages, contactLinks, joinedDate } = teacher as ITeacher;

  const languagesString = languages.join(',');
  const isContactLinks = contactLinks?.length !== 0;

  return (
    <>
      {biography && (
        <Styled.BioWrapper>
          <Styled.Text>{biography}</Styled.Text>
        </Styled.BioWrapper>
      )}
      <Styled.Wrapper>
        <Icon type="globe" size={22} colorIcon={'cloudyBlue'} />
        <Styled.RightWrapper>
          <Styled.TitleText>Languages</Styled.TitleText>
          <Styled.Text>{languagesString}</Styled.Text>
        </Styled.RightWrapper>
      </Styled.Wrapper>
      {isContactLinks && (
        <Styled.Wrapper>
          <Icon type="link" size={22} colorIcon={'cloudyBlue'} />
          <Styled.RightWrapper>
            <Styled.TitleText>Website</Styled.TitleText>
            {contactLinks.map(({ name, link }, index: number) => {
              const isLastItem = contactLinks.length - 1 > index;
              return (
                <Styled.LinkButton isLastItem={isLastItem} key={name} onPress={() => onPressLink(link)}>
                  <Styled.Text isUnderLine={true}>{name}</Styled.Text>
                </Styled.LinkButton>
              );
            })}
          </Styled.RightWrapper>
        </Styled.Wrapper>
      )}
      <Styled.Wrapper isLastChild={true}>
        <Icon type="student" size={22} colorIcon={'cloudyBlue'} />
        <Styled.TitleText isLastChild={true}>Joined {joinedDate}</Styled.TitleText>
      </Styled.Wrapper>
    </>
  );
};
