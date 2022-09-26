export interface IValue {
  email: string;
  password: string;
}

export interface IHandleSignIn {
  password: string;
  email: string;
}

export interface IERROR_CODES {
  'auth/email-already-in-use': string;
  'auth/user-not-found': string;
  'auth/wrong-password': string;
  'auth/invalid-email': string;
  'auth/too-many-requests': string;
}
