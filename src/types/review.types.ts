import { IUser } from './auth.types';

export interface IReview {
  id: string;
  createdAt: string;
  text?: string;
  rating: number;
  user: IUser;
  // productId: string;
}

export type TReviewData = {
  text?: string;
  rating: number;
};
