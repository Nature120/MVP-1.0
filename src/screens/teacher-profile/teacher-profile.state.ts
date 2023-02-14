import { useEffect, useState } from 'react';
import { NativeScrollEvent } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { databaseRef, getFeaturedPractice } from '@services/api.service';
import { isIOS } from '@services/helpers/device-utils';
import { useTeacherHook } from '@services/hooks/teacherHook';

import { IParams } from './teacher-profile.typings';
import { IPracticeLibrary, ITeacher } from '@typings/common';

export const useStateTeacherProfile = () => {
  const [selectedPractice, setSelectedPractice] = useState<IPracticeLibrary>({} as IPracticeLibrary);
  const [teacherPractices, setTeacherPractices] = useState<IPracticeLibrary[]>([] as IPracticeLibrary[]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastPractice, setLastPractice] = useState<string | null>(null);
  const { params } = useRoute();
  const { teacherName } = params as IParams;
  const { teacher } = useTeacherHook(teacherName);
  const { featuredPractice, audioPractices } = teacher as ITeacher;
  const typedTeacher = teacher as ITeacher;
  const isNotEmptyObject = teacher && Object.keys(teacher).length > 0;

  useEffect(() => {
    if (!featuredPractice) {
      return;
    }
    fetchFeaturedPractice();
  }, [featuredPractice]);

  useEffect(() => {
    if (!audioPractices) {
      return;
    }
    fetchTeacherPractices();
  }, [audioPractices]);

  const fetchFeaturedPractice = async () => {
    const featuredPracticeData = await getFeaturedPractice(featuredPractice);
    setSelectedPractice(featuredPracticeData as IPracticeLibrary);
  };

  const fetchTeacherPractices = async () => {
    let namesChunks = [];

    const lastAudioPractice = [...audioPractices].sort()[audioPractices.length - 1];
    if (lastPractice === lastAudioPractice) {
      return;
    }

    if (lastPractice) {
      const lastPracticeIndex = [...audioPractices].sort().findIndex((practice: string) => practice === lastPractice);
      namesChunks = [...audioPractices].sort().slice(lastPracticeIndex + 1, lastPracticeIndex + 11);
      handleChunkPractices(namesChunks);
      return;
    }
    namesChunks = [...audioPractices].sort().slice(0, 10);
    handleChunkPractices(namesChunks);
  };

  const handleChunkPractices = async (namesChunks: string[]) => {
    try {
      const collectionRef = databaseRef('Practise library');
      const query = collectionRef.where('title', 'in', namesChunks);

      const snapShot = await query.get();

      const chunkPractices = (await snapShot.docs.map(doc => doc.data()).sort()) as IPracticeLibrary[];
      setTeacherPractices((prevState: IPracticeLibrary[]) => [...prevState, ...chunkPractices]);
      setLastPractice(namesChunks[namesChunks.length - 1]);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleLoadMore = () => {
    setIsLoading(true);

    if (isIOS) {
      fetchTeacherPractices();
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      fetchTeacherPractices();
      setIsLoading(false);
    }, 600);
  };

  const handleScroll = ({ layoutMeasurement, contentOffset, contentSize }: NativeScrollEvent) => {
    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    const test = audioPractices.length > teacherPractices.length;
    if (isCloseToBottom && !isLoading && test) {
      handleLoadMore();
    }
  };

  return { teacher, selectedPractice, teacherPractices, handleScroll, isLoading, typedTeacher, isNotEmptyObject };
};
