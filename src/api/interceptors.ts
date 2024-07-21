import axios, { CreateAxiosDefaults } from 'axios';

import { errorCatch } from './error';
import { getAccessToken, removeFromStorage } from '@/services/auth/auth.helper';
import { AuthService } from '@/services/auth/auth.service';

const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, //works with server cookies
};

export const axiosPublic = axios.create(options);
export const axiosAuth = axios.create(options);

axiosAuth.interceptors.request.use(config => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosAuth.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config;

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await AuthService.refreshTokens();
        return axiosAuth.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') removeFromStorage();
      }
    }
  },
);
