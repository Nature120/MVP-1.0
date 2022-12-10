import { useState } from 'react';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { useErrorHandler } from '@services/hooks/errorHandler';
import { useSignOut } from '@services/hooks/sign-out';

import { IError } from '@typings/common';
import { IERROR_CODES } from '@typings/error-codes-typings';

export const useStateDeleteAccount = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [password, setPassword] = useState<string>('');
  const [provider, setProvider] = useState<string>('');
  const user: FirebaseAuthTypes.User | null = auth().currentUser;
  const { onSignOut } = useSignOut();
  const { handleError, resetError, errorMessage } = useErrorHandler();

  const onCloseModal = (): void => {
    setIsVisibleModal(false);
  };

  const onPressSocialBtn = async (name: string): Promise<void> => {
    setIsVisibleModal(true);
    setProvider(name);
  };

  const deleteUser = () => {
    switch (provider) {
      case 'form':
        deleteUserForm();
        break;
      case 'apple':
        deleteUserApple();
        break;
      case 'google':
        deleteUserGoogle();
        break;
      case 'facebook':
        deleteUserFaceBook();
        break;

      default:
        break;
    }
  };

  const deleteUserForm = async () => {
    try {
      const credentials = auth.EmailAuthProvider.credential(user?.email as string, password);
      setIsVisibleModal(false);
      await deleteUserFromFirebase(credentials);
    } catch (error) {
      const err = error as IError;
      handleError(err.code as keyof IERROR_CODES);
    }
  };

  const deleteUserGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const credentials = await auth.GoogleAuthProvider.credential(idToken);

      setIsVisibleModal(false);
      deleteUserFromFirebase(credentials);
    } catch (error) {
      console.log('error', error);
    }
  };

  const deleteUserApple = async () => {
    try {
      // Start the sign-in request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // Ensure Apple returned a user identityToken
      if (!appleAuthRequestResponse.identityToken) {
        throw new Error('Apple Sign-In failed - no identify token returned');
      }

      // Create a Firebase credential from the response
      const { identityToken, nonce } = appleAuthRequestResponse;
      const credential = auth.AppleAuthProvider.credential(identityToken, nonce);

      setIsVisibleModal(false);
      deleteUserFromFirebase(credential);
    } catch (error) {
      console.log('error', error);
    }
  };

  const deleteUserFaceBook = async () => {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = await auth.FacebookAuthProvider.credential(data.accessToken);

      setIsVisibleModal(false);
      deleteUserFromFirebase(facebookCredential);
    } catch (error) {
      console.log('error', error);
    }
  };

  const deleteUserFromFirebase = async (credential: FirebaseAuthTypes.AuthCredential) => {
    try {
      const isUser = await user?.reauthenticateWithCredential(credential);
      if (!isUser) {
        return;
      }
      await user?.delete();
      await firestore().collection('Users').doc(user?.uid).delete();
      onSignOut();
    } catch (error) {
      const err = error as IError;
      handleError(err.code as keyof IERROR_CODES);
    }
  };

  return {
    onPressSocialBtn,
    deleteUser,
    onCloseModal,
    isVisibleModal,
    errorMessage,
    setPassword,
    resetError,
  };
};
