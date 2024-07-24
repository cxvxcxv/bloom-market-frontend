import { ORDERS } from '@/constants/endpoint.constants';

import { IOrder, IOrderForm } from '@/types/order.types';

import { axiosAuth } from '@/api/interceptors';

export const OrderService = {
  async getOrders() {
    const response = await axiosAuth.get<IOrder[]>(`/${ORDERS}`);
    return response;
  },

  async createOrder(data: IOrderForm) {
    const response = await axiosAuth.post<IOrder>(`/${ORDERS}`, data);
    return response;
  },
};
