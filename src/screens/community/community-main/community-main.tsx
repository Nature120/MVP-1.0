import React from 'react';
import { FlatList } from 'react-native';

import { Image } from '@components/atoms/image';
import { useStateCommunityMain } from './community-main.state';

import { ITeacher } from '@typings/common';

import { CommunityMainStyled as Styled } from './community-main.styles';

export const CommunityMain = () => {
  const { teachers, onPressTeacherCard } = useStateCommunityMain();

  const TeacherCardMarkUp = (teacher: ITeacher) => {
    const { fullName, avatar, biography } = teacher;

    return (
      <Styled.TeacherWrapperCard onPress={() => onPressTeacherCard(fullName)}>
        <Image source={{ uri: avatar }} width={80} height={80} styles={Styled.Image} />
        <Styled.RightWrapperCard>
          <Styled.FullNameText>{fullName}</Styled.FullNameText>
          <Styled.Text numberOfLines={2}>{biography}</Styled.Text>
        </Styled.RightWrapperCard>
      </Styled.TeacherWrapperCard>
    );
  };

  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <Styled.SubTitle>Teachers</Styled.SubTitle>
        <FlatList
          data={teachers}
          renderItem={({ item }) => <TeacherCardMarkUp {...item} />}
          keyExtractor={item => item.fullName}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};
