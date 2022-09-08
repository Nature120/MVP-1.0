import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import LoginFunctions from '@services/helpers/auth-social';

import { TFirebaseAuthCredentials } from '@typings/common';

////-----------------------------Google-------------------------------///
export const authGoogle = async () => {
  const { idToken, user } = await GoogleSignin.signIn();

  const { email } = user;

  // Create a Google credential with the token
  const credential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  const provider = auth.GoogleAuthProvider.PROVIDER_ID;

  await LoginFunctions.signInOrLink({ provider, credential, email });
};

////-----------------------------FaceBook-------------------------------///
export const authFaceBook = async () => {
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

  credential = auth.FacebookAuthProvider.credential(token.accessToken);

  const infoRequest = new GraphRequest('/me?fields=name,email', undefined, _responseInfoCallback);
  new GraphRequestManager().addRequest(infoRequest).start();
};
