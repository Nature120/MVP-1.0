import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

import LoginFunctions from '@services/helpers/auth-social';

import { TFirebaseAuthCredentials } from '@typings/common';

export const authFaceBook = async () => {
  try {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    const provider = auth.FacebookAuthProvider.PROVIDER_ID;

    if (result.isCancelled) {
      console.log('User cancelled the login process');
      return;
    }

    let credential = <TFirebaseAuthCredentials>{};

    const _responseInfoCallback = async (
      error: Record<string, unknown> | undefined,
      resultUser: Record<string, unknown> | undefined,
    ) => {
      const email = resultUser?.email;

      if (error) {
        console.log(error.message);
      } else {
        await LoginFunctions.signInOrLink({ provider, credential, email });
      }
    };

    const token = await AccessToken.getCurrentAccessToken();
    if (!token) {
      throw 'Something went wrong obtaining access token';
    }
    credential = await auth.FacebookAuthProvider.credential(token.accessToken);
    const infoRequest = await new GraphRequest('/me?fields=name,email', undefined, _responseInfoCallback);
    await new GraphRequestManager().addRequest(infoRequest).start();
  } catch (error: any) {
    console.log(error.message);
  }
};
