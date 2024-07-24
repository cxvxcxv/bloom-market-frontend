import { USERS } from '@/constants/endpoint.constants';

import { axiosAuth } from '@/api/interceptors';

export const UserService = {
  async findOne(id: string) {
    return await axiosAuth.get(`/${USERS}/${id}`);
  },
};
