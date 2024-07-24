import { PRODUCTS } from '@/constants/endpoint.constants';

import { IProduct, TProductDataFilters } from '@/types/product.types';

import { axiosPublic } from '@/api/interceptors';

export const ProductService = {
  //TODO: test
  async findAll(queryData = {} as TProductDataFilters) {
    return await axiosPublic.get<IProduct[]>(`/${PRODUCTS}`, {
      params: queryData,
    });
  },

  async findOne(id: string) {
    return await axiosPublic.get<IProduct>(`/${PRODUCTS}/${id}`);
  },

  async findSimilar(id: string) {
    return await axiosPublic.get<IProduct[]>(`/${PRODUCTS}/${id}/similar`);
  },

  async findByCategory(categoryId: string) {
    return await axiosPublic.get<IProduct>(
      `${PRODUCTS}/${categoryId}/by-category`,
    );
  },
};
