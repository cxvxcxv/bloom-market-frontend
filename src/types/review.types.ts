import { IUser } from './auth.types';

export interface IReview {
  id: string;
  createdAt: string;
  text: string;
  rating: number;
  user: IUser;
}
