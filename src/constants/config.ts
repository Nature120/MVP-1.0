import Config from 'react-native-config';

const API_HASH_MAP: Record<string, string> = {
  prod: Config.PROD_URL,
  stage: Config.STAGE_URL,
  dev: 'localhost:3000',
};

const ENV = Config.APP_ENV || 'dev';

export const CONFIG = {
  apiUrl: API_HASH_MAP[ENV],
  webClientId: Config.WEB_CLIENT_ID,
};
