import { ICategory } from './category.types';
import { IReview } from './review.types';

export interface IProduct {
  id: string;
  createdAt: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  category: ICategory;
  reviews: IReview[];
}

// export interface IProdutDetails {
//   product: IProduct;
// }
