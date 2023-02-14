import React from 'react';

import { Icon } from '@components/atoms/icon';

import { IProp } from './additional-info.typings';

import { AdditionalInfoStyled as Styled } from './additional-info.styles';

export const AdditionalInfo: React.FC<IProp> = ({ practice, isAudioFile }) => {
  const { season, indoorOutdoor } = practice;
  const isAllSeason = season.length > 1;

  const handleSeasonIcon = () => {
    if (isAllSeason) {
      return 'cloud_sun';
    }

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
    <Styled.Container isAudioFile={isAudioFile}>
      <Styled.SeasonCardWrapper isAudioFile={isAudioFile}>
        <Icon type={iconSeasonType} size={24} />
        <Styled.Text numberOfLines={1}>{(isAllSeason ? 'All seasons' : season[0]) || 'All seasons'}</Styled.Text>
      </Styled.SeasonCardWrapper>
      <Styled.InfoCardWrapper>
        <Icon type={iconIndoorOutDoorType} size={24} />
        <Styled.Text numberOfLines={1}>{indoorOutdoor || 'Outdoor'}</Styled.Text>
      </Styled.InfoCardWrapper>
      {isAudioFile && (
        <Styled.InfoCardWrapper>
          <Icon type="speaker_high" size={24} colorIcon="cloudyBlue" />
          <Styled.Text numberOfLines={1}>Audio available</Styled.Text>
        </Styled.InfoCardWrapper>
      )}
    </Styled.Container>
  );
};
