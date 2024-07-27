import { IOrder } from './order.types';
import { IReview } from './review.types';

export interface IUser {
  id: string;
  email: string;
}

export interface IProfileResponse {
  user: IUser;
  statistics: {
    orders: IOrder[];
    reviews: IReview[];
  };
}
