import { CATEGORIES } from '@/constants/endpoint.constants';

import { ICategory } from '@/types/category.types';

import { axiosPublic } from '@/api/interceptors';

export const CategoryService = {
  async findAll() {
    const response = await axiosPublic.get<ICategory[]>(`/${CATEGORIES}`);
    return response.data;
  },

  async findOne(categoryId: string) {
    const response = await axiosPublic.get<ICategory>(
      `${CATEGORIES}/${categoryId}`,
    );
    return response.data;
  },
};
