import { IAuthForm, IAuthResponse, TAuthMethod } from '@/types/auth.types';

import { axiosPublic } from '@/api/interceptors';

import { removeFromStorage, saveTokenStorage } from './auth.helper';

export const AuthService = {
  async main(type: TAuthMethod, data: IAuthForm) {
    const response = await axiosPublic.post<IAuthResponse>(
      `auth/${type}`,
      data,
    );

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);
    return response;
  },

  async refreshTokens() {
    const response = await axiosPublic.post<IAuthResponse>(
      'auth/login/refresh-tokens',
    );

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);
    return response;
  },

  async logout() {
    const response = await axiosPublic.post<boolean>('auth/logout');

    if (response.data) removeFromStorage();
    return response;
  },
};
