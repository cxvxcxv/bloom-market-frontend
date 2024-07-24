import Cookies from 'js-cookie';

import { EnumTokens } from '@/types/token.types';

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: process.env.NEXT_PUBLIC_DOMAIN,
    sameSite: 'strict',
    expires: 1, //expiration date in storage (days)
  });
};

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN);
};
