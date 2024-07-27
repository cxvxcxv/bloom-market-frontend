import { PRODUCTS } from '@/constants/endpoint.constants';

import { IProduct, TProductDataFilters } from '@/types/product.types';

import { axiosPublic } from '@/api/interceptors';

export const ProductService = {
  //TODO: test
  async findAll(queryData = {} as TProductDataFilters) {
    const response = await axiosPublic.get<IProduct[]>(`/${PRODUCTS}`, {
      params: queryData,
    });

    return response.data;
  },

  async findOne(id: string) {
    const response = await axiosPublic.get<IProduct>(`/${PRODUCTS}/${id}`);
    return response.data;
  },

  async findSimilar(id: string) {
    const response = await axiosPublic.get<IProduct[]>(
      `/${PRODUCTS}/${id}/similar`,
    );
    return response.data;
  },

  async findByCategory(categoryId: string) {
    const response = await axiosPublic.get<IProduct>(
      `${PRODUCTS}/${categoryId}/by-category`,
    );
    return response.data;
  },
};
