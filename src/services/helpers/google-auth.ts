import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import LoginFunctions from '@services/helpers/auth-social';

import { IError } from '@typings/common';

export const authGoogle = async () => {
  try {
    const { idToken, user } = await GoogleSignin.signIn();

    const { email } = user;

    // Create a Google credential with the token
    const credential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const provider = auth.GoogleAuthProvider.PROVIDER_ID;

    await LoginFunctions.signInOrLink({ provider, credential, email });
  } catch (err) {
    const error = err as IError;
    console.log(error.message);
  }
};
