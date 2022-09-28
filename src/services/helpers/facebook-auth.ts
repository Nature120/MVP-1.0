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
    let isFirstTimeAuth;

    const _responseInfoCallback = async (
      error: Record<string, unknown> | undefined,
      resultUser: Record<string, unknown> | undefined,
    ) => {
      const email = resultUser?.email;

      if (error) {
        console.log(error.message);
      } else {
        // console.log('t', t);
        return await LoginFunctions.signInOrLink({ provider, credential, email });
      }
    };

    const token = await AccessToken.getCurrentAccessToken();
    if (!token) {
      throw 'Something went wrong obtaining access token';
    }

    credential = auth.FacebookAuthProvider.credential(token.accessToken);
    console.log('credential', credential);

    const t = false;

    // const infoRequest = new GraphRequest(
    //   '/me?fields=name,email',
    //   undefined,
    //   (error: Record<string, unknown> | undefined, resultUser: Record<string, unknown> | undefined) =>
    //     _responseInfoCallback(error, resultUser, t),
    // );

    const infoRequest = new GraphRequest('/me?fields=name,email', undefined, _responseInfoCallback);
    console.log('infoRequest', infoRequest);
    new GraphRequestManager().addRequest(infoRequest).start();
    return isFirstTimeAuth;
  } catch (error: any) {
    console.log(error.message);
  }
};
