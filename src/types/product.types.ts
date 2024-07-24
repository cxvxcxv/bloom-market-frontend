import { IPagination } from './pagination.types';
import { IReview } from './review.types';

export interface IProduct {
  id: string;
  createdAt: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  categoryId: string;
  reviews: IReview[];
}

export enum EnumProductSort {
  HIGH_PRICE = 'high-price',
  LOW_PRICE = 'low-price',
  NEWEST = 'newest',
  OLDEST = 'oldest',
}

export type TProductDataFilters = {
  sort?: EnumProductSort;
  searchTerm?: string;
} & IPagination;

// export interface IProdutDetails {
//   product: IProduct;
// }
