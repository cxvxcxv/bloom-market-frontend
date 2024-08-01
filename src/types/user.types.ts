export interface IUser {
  id: string;
  email: string;
}

export interface IProfileResponse {
  user: IUser;
  statistics: {
    name: string;
    value: string;
  }[];
}
