export interface IAuthForm {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

export type TAuthMethod = 'login' | 'register';