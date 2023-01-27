import React from 'react';

import { Icon } from '@components/atoms/icon';

import { IPracticeLibrary } from '@typings/common';

import { AdditionalInfoStyled as Styled } from './additional-info.styles';

interface IProp {
  practice: TPractice;
  isAudioFile: boolean;
}

type TPractice = Pick<IPracticeLibrary, 'season' | 'indoorOutdoor'>;

export const AdditionalInfo: React.FC<IProp> = ({ practice, isAudioFile }) => {
  const { season, indoorOutdoor } = practice;

  const handleSeasonIcon = () => {
    switch (season[0]) {
      case 'Winter':
        return 'snow_flake';

      case 'Spring':
        return 'flower_light';

      case 'Summer':
        return 'sun';

      case 'Fall':
        return 'tree';

      default:
        return 'cloud_sun';
    }
  };

  const handleIconIndoorOutdoor = () => {
    switch (indoorOutdoor) {
      case 'Outdoor':
        return 'mountains';

      case 'Indoor':
        return 'house';

      default:
        return 'mountains';
    }
  };

  const iconSeasonType = handleSeasonIcon();
  const iconIndoorOutDoorType = handleIconIndoorOutdoor();

  return (
    <Styled.Container>
      <Styled.InfoWrapper>
        <Icon type={iconSeasonType} size={24} />
        <Styled.Text numberOfLines={1}>{season[0] || 'All seasons'}</Styled.Text>
      </Styled.InfoWrapper>
      <Styled.InfoWrapper>
        <Icon type={iconIndoorOutDoorType} size={24} />
        <Styled.Text numberOfLines={1}>{indoorOutdoor || 'Outdoor'}</Styled.Text>
      </Styled.InfoWrapper>
      {isAudioFile && (
        <Styled.InfoWrapper>
          <Icon type="speaker_high" size={24} colorIcon="cloudyBlue" />
          <Styled.Text numberOfLines={1}>Audio available</Styled.Text>
        </Styled.InfoWrapper>
      )}
    </Styled.Container>
  );
};
