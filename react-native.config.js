module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['src/assets/fonts/'],
  dependencies: {
    // disable Android platform, other platforms will still autolink if provided
    appcenter: {
      platforms: {
        android: null,
      },
    },

    'react-native-video': {
      platforms: {
        android: {
          sourceDir: '../node_modules/react-native-video/android-exoplayer',
        },
      },
    },
    'appcenter-analytics': {
      platforms: {
        android: null,
      },
    },
    'appcenter-crashes': {
      platforms: {
        android: null,
      },
    },
  },
};
