import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import { storeWithSocial } from './firebase-store';

import { TFirebaseAuthCredentials } from '@typings/common';

interface ISignInOrLink extends ISaveCredential {
  email: string | unknown;
}

interface ISaveCredential {
  provider: string;
  credential: TFirebaseAuthCredentials;
}

const LoginFunctions = {
  signInOrLink: async function ({ provider, credential, email }: ISignInOrLink) {
    this.saveCredential({ provider, credential });
    const response = await auth()
      .signInWithCredential(credential)
      .catch(async error => {
        try {
          if (error.code !== 'auth/account-exists-with-different-credential') {
            throw error;
          }
          const methods = await auth().fetchSignInMethodsForEmail(email as string);
          const oldCred = await this.getCredential(methods[0]);
          await auth().signInWithCredential(oldCred as TFirebaseAuthCredentials);
          auth().currentUser?.linkWithCredential(credential);
        } catch (err) {
          throw err;
        }
      });
    ///Store user in Database///
    const isFirstTime = await storeWithSocial({ response });
    return isFirstTime;
  },

  getCredential: async function (provider: string) {
    try {
      const value = await AsyncStorage.getItem(provider);
      if (value !== null) {
        const [token, secret] = JSON.parse(value);
        return this.getProvider(provider).credential(token, secret);
      }
    } catch (error) {
      throw error;
    }
  },

  saveCredential: async function ({ provider, credential }: ISaveCredential) {
    try {
      const saveData = JSON.stringify([credential.token, credential.secret]);
      await AsyncStorage.setItem(provider, saveData);
    } catch (error) {
      throw error;
    }
  },

  getProvider: function (providerId: string) {
    switch (providerId) {
      case auth.GoogleAuthProvider.PROVIDER_ID:
        return auth.GoogleAuthProvider;
      case auth.FacebookAuthProvider.PROVIDER_ID:
        return auth.FacebookAuthProvider;
      case auth.EmailAuthProvider.PROVIDER_ID:
        return auth.EmailAuthProvider;
      default:
        throw new Error(`No provider implemented for ${providerId}`);
    }
  },
};
export default LoginFunctions;
