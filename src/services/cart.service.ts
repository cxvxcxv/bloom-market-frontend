import { CART } from '@/constants/endpoint.constants';

import { axiosAuth } from '@/api/interceptors';

export const CartService = {
  async getCart() {
    const response = await axiosAuth.get(`/${CART}`);
    return response.data;
  },

  async addItem(productId: string) {
    const response = await axiosAuth.post(`${CART}`, { productId });
    return response.data;
  },
};
