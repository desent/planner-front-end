import Cookies from 'js-cookie';

export enum EnumAccessTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken'
}

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumAccessTokens.ACCESS_TOKEN);
  return accessToken || null;
}

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumAccessTokens.ACCESS_TOKEN, accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 1
  });
};

export const removeTokenFromStorage = () => {
  Cookies.remove(EnumAccessTokens.ACCESS_TOKEN);
};
