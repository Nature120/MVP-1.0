import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import LoginFunctions from '@services/helpers/auth-social';

export const authGoogle = async () => {
  try {
    const { idToken, user } = await GoogleSignin.signIn();

    const { email } = user;

    // Create a Google credential with the token
    const credential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const provider = auth.GoogleAuthProvider.PROVIDER_ID;

    const isFirstTimeAuth = await LoginFunctions.signInOrLink({ provider, credential, email });
    return isFirstTimeAuth;
  } catch (error: any) {
    console.log(error.message);
  }
};
