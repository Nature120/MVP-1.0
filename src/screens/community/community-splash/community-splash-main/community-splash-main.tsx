import React from 'react';

import { INFO_LIST } from './community-splash-main.constants';
import { IMAGES } from '@constants/images';

import { TInfo_list } from './community-splash-main.typings';

import { CommunitySplashMainStyled as Styled } from './community-splash-main.styles';

export const CommunitySplashMain = () => {
  return (
    <Styled.Container>
      <Styled.Title>Welcome to the Nature 120 Community</Styled.Title>
      <Styled.Text isMarginBottom={true}>
        We are growing the world’s first truly diverse, global group of experts They are here to share their practices
        and wisdom with you
      </Styled.Text>
      <Styled.WrapperList>
        {INFO_LIST.map((item: TInfo_list) => (
          <Styled.WrapperItem key={item.subTitle}>
            <Styled.Image source={IMAGES[item.icon]} />
            <Styled.RightWrapper>
              <Styled.SubTitle>{item.subTitle}</Styled.SubTitle>
              <Styled.Text isMarginBottom={false}>{item.text}</Styled.Text>
            </Styled.RightWrapper>
          </Styled.WrapperItem>
        ))}
      </Styled.WrapperList>
    </Styled.Container>
  );
};
