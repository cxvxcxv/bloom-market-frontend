import { REVIEWS } from '@/constants/endpoint.constants';

import { IReview, TReviewData } from '@/types/review.types';

import { axiosAuth, axiosPublic } from '@/api/interceptors';

export const ReviewService = {
  async findByProduct(productId: string) {
    const response = await axiosPublic.get<IReview[]>(
      `/${REVIEWS}?productId=${productId}`,
    );
    return response.data;
  },

  async findOne(id: string) {
    const response = await axiosPublic.get<IReview>(`/${REVIEWS}/${id}`);
    return response.data;
  },

  async create(productId: string, data: TReviewData) {
    const response = await axiosAuth.post(`${REVIEWS}/${productId}`, data);
    return response.data;
  },

  async delete(id: string) {
    const response = await axiosAuth.delete<any>(`/${REVIEWS}/${id}`); //TODO: add typization
    return response.data;
  },
};
