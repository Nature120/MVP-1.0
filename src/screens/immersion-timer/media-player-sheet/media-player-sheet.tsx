import React, { useCallback, useMemo, useState } from 'react';
import { useRef } from 'react';
import { Easing } from 'react-native-reanimated';
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';

import { MediaPlayer } from './media-player/media-player';

import { isIOS } from '@services/helpers/device-utils';

import { IAudioFile, IPracticeLibrary } from '@typings/common';

import { MediaPlayerSheetStyled as Styled } from './media-player-sheet.styles';

interface IProp {
  audioFile?: IAudioFile;
  practiceInfo: IPracticeLibrary;
}

export const MediaPlayerSheet: React.FC<IProp> = ({ audioFile, practiceInfo }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => (isIOS ? ['8%', '41%'] : ['9%', '46%']), []);

  const handleSheetChanges = useCallback((index: number) => {
    setIsCollapsed(index === 1 ? false : true);
  }, []);

  return (
    <BottomSheet
      handleComponent={null}
      enableContentPanningGesture={isCollapsed ? false : true}
      ref={bottomSheetRef}
      index={0}
      animationDuration={200}
      animationEasing={Easing.linear}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <Styled.Wrapper>
        <MediaPlayer audioFile={audioFile} isCollapsed={isCollapsed} practiceInfo={practiceInfo} />
      </Styled.Wrapper>
    </BottomSheet>
  );
};
