import { Share } from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import { FIREBASE_DYNAMIC_LINK } from '@constants/firestore-refs';
import { APP_STORE_ID } from '@constants/social-url';

import { ITeacher } from '@typings/common';

export const useTeacherProfileHeaderState = (teacher: ITeacher) => {
  const { fullName, avatar } = teacher;

  const modifiedFullName = fullName?.split(' ').join('');

  const handleShareDynamicLink = async () => {
    if (!modifiedFullName) {
      return;
    }
    const link = await dynamicLinks().buildShortLink({
      link: `https://nature120.app/teachers?d=${modifiedFullName}`,
      domainUriPrefix: FIREBASE_DYNAMIC_LINK,
      android: {
        packageName: 'com.nature120',
      },
      ios: {
        bundleId: 'com.nature120.app',
        appStoreId: APP_STORE_ID,
      },
      social: {
        title: 'Teacher profile link',
        descriptionText: 'Check detailed information about teacher',
        imageUrl: avatar,
      },
    });

    Share.share({
      title: 'Teacher profile link',
      message: `Check detailed information about teacher in our app,link- ${link}`,
      url: link,
    });
  };
  return { handleShareDynamicLink };
};
