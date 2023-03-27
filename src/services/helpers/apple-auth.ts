import { appleAuth } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';

import LoginFunctions from './auth-social';

import { IError } from '@typings/common';

export const authApple = async () => {
  try {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
    const email = appleAuthRequestResponse.email;

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned');
    }

    // Create a Firebase credential from the response
    const { identityToken, nonce, fullName } = appleAuthRequestResponse;
    const credential = auth.AppleAuthProvider.credential(identityToken, nonce);
    const provider = auth.AppleAuthProvider.PROVIDER_ID;

    const iosGivenName = fullName?.givenName as string | undefined;
    await LoginFunctions.signInOrLink({ provider, credential, email, iosGivenName });
  } catch (err) {
    const error = err as IError;
    console.log(error.message);
  }
};
