import { USERS } from '@/constants/endpoint.constants';

import { IProfileResponse } from '@/types/user.types';

import { axiosAuth } from '@/api/interceptors';

export const UserService = {
  // async findOne(id: string) {
  //   const response = await axiosAuth.get(`/${USERS}/${id}`);
  //   return response.data;
  // },

  async getProfile() {
    const response = await axiosAuth.get<IProfileResponse>(`/${USERS}`);
    return response.data;
  },

  async updateProfile() {
    const response = await axiosAuth.put(`/${USERS}`);
    return response.data;
  },
};
