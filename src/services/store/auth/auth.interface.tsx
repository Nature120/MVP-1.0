export interface IState {
  auth: IAuth;
}

interface IAuth {
  user: IUser;
  error: string | null;
  isAuthenticated: boolean;
  isFirstLaunchApp: boolean;
}

export interface IUser {
  uid: string;
  email?: string | null;
  first_name?: string | null;
}
